import { Descriptor } from './../../exercises/exercises.model';
import { createReducer, on } from '@ngrx/store';

import { Workout } from '../workout.model';
import { 
    fetchWorkouts, 
    fetchWorkoutsSuccess, 
    fetchWorkoutsFailure, 
    addWorkoutSuccess,
    deleteWorkoutSuccess,
    deleteWorkoutFailure
} from './workouts.actions';

export interface workoutsState {
    loaded: boolean;
    loading: boolean;
    error: any;
    workouts: Workout[];
}

const initialState: workoutsState = {
    loaded: false,
    loading: false,
    error: '',
    workouts: []
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
        let model = state.workouts ;

        model.push(workout);
        return {
            ...state,
            loaded: true,
            loading: false,
            workouts: model
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
            workouts: newWorkoutArray
        }
    }),
    on(deleteWorkoutFailure, (state, { error }) => ({
        ...state,
        loaded: false,
        loading: true,
        error: error
    }))
);

export function workoutsReducer(state, action) {
    return _workoutsReducer(state, action);
}