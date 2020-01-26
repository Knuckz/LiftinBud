import { Descriptor, Exercise } from './../../exercises/exercises.model';
import { createReducer, on } from '@ngrx/store';

import { Workout } from '../workout.model';
import { 
    fetchWorkouts, 
    fetchWorkoutsSuccess, 
    fetchWorkoutsFailure, 
    addWorkoutSuccess,
    deleteWorkoutSuccess,
    deleteWorkoutFailure,
    setTempExercises,
    deleteTempExercise,
    addTempExercise,
    editWorkout,
    editWorkoutSuccess,
    editWorkoutFailure,
    updateSelectedWorkout
} from './workouts.actions';

export interface workoutsState {
    loaded: boolean;
    loading: boolean;
    error: any;
    selectedWorkoutId: number;
    workouts: Workout[];
    tempExercises: Exercise[];
}

const initialState: workoutsState = {
    loaded: false,
    loading: false,
    error: '',
    selectedWorkoutId: null,
    workouts: [],
    tempExercises: [],
};

const _workoutsReducer = createReducer(
    initialState,
    on(fetchWorkouts, state => ({
        ...state,
        loading: true,
    })),
    on(fetchWorkoutsSuccess, (state, { workouts }) => ({
        ...state,
        loaded: true,
        loading: false,
        workouts: workouts,
    })),
    on(fetchWorkoutsFailure, (state, { error }) => ({
        ...state,
        loaded: false,
        loading: false,
        error: error,
    })),
    on(addWorkoutSuccess, (state, { workout }) => {
        let model = state.workouts;

        workout.descriptors = [...determineDuplicateDiscriptors(workout.exercises)]
        model.push(workout);
        return {
            ...state,
            loaded: true,
            loading: false,
            workouts: [...model]
        }
    }),
    on(deleteWorkoutSuccess, (state, { workout }) => {
        let model = state.workouts;
        let newWorkoutArray = [];

        newWorkoutArray = model.filter((workoutComparison) => {
            return workout.id != workoutComparison.id;
        })
        return {
            ...state,
            loaded: true,
            loading: false,
            workouts: [...newWorkoutArray]
        }
    }),
    on(deleteWorkoutFailure, (state, { error }) => ({
        ...state,
        loaded: false,
        loading: true,
        error: error
    })),
    on(setTempExercises, (state, { newTempExercises }) =>({
        ...state,
        tempExercises: newTempExercises
    })),
    on(deleteTempExercise, (state, { deleteExercise }) => {
        let tempExerciseCopy = state.tempExercises;

        let newTempExercises = tempExerciseCopy.filter((exercise) => {
            return exercise.id !== deleteExercise.id;
        })
        return {
            ...state,
            tempExercises: newTempExercises
        }
    }),
    on(addTempExercise, (state, { tempExercise }) => {
        let tempExerciseCopy = state.tempExercises;
        return {
            ...state,
            tempExercises: [...tempExerciseCopy, tempExercise]
        }
    }),
    on(editWorkout, (state) => {
        return  {
            ...state
        }
    }),
    on(editWorkoutSuccess, (state, { workout }) => {
        let tempWorkouts = state.workouts

        let index = tempWorkouts.findIndex((temp) => {
            return temp.id === workout.id;
        })

        if (index > -1) {
            tempWorkouts[index] = {
                ...workout,
                descriptors: determineDuplicateDiscriptors(workout.exercises)
            };
        }

        return {
            ...state,
            workouts: [...tempWorkouts],
            isLoading: false,
            loaded: true
        }
    }),
    on(editWorkoutFailure, (state, { error }) => {

        return {
            ...state,
            error: error,
            isLoading: false,
            loaded: true
        }
    }),
    on(updateSelectedWorkout, (state, { workoutId }) => ({
        ...state,
        selectedWorkoutId: workoutId
    }))
);

export function workoutsReducer(state, action) {
    return _workoutsReducer(state, action);
}

function determineDuplicateDiscriptors(exercises: any) {
    var descriptorsArray = [];
    var uniqueDescriptors: Descriptor[] = [];
    var lookup = {}

    var descriptors = exercises.map((exercise) => {
      return exercise.descriptor
    })

    descriptors.forEach((descriptor) => {
      descriptorsArray = [...descriptorsArray, ...descriptor]
    })

    descriptorsArray.forEach((descriptor) => {
      if (!lookup[descriptor.id]) {
        lookup[descriptor.id] = true;
        uniqueDescriptors.push(descriptor);
      }
    })

    return uniqueDescriptors;
}