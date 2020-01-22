import { createReducer, on } from '@ngrx/store';

import { Exercise } from '../exercises.model';
import { fetchExercises, fetchExercisesSuccess, fetchExercisesFailure, addExercise, addExerciseSuccess, addExerciseFailure, editExerciseSuccess, editExerciseFailure, editExercise, deleteExerciseSuccess, deleteExerciseFailure } from './exercises.actions';
import { exercisesEffects } from './exercises.effects';

export interface exercisesState {
    loaded: boolean;
    loading: boolean;
    error: any;
    exercises: Exercise[];
}

const initialState: exercisesState = {
    loaded: false,
    loading: false,
    error: '',
    exercises: []
};

const _exercisesReducer = createReducer(
    initialState,
    on(fetchExercises, state => ({
        ...state,
        loading: true,
    })),
    on(fetchExercisesSuccess, (state, { exercises }) => ({
        ...state,
        loaded: true,
        loading: false,
        exercises: exercises,
    })),
    on(fetchExercisesFailure, (state, { error }) => ({
        ...state,
        loaded: false,
        loading: false,
        error: error,
    })),
    on(addExerciseSuccess, (state, { exercise }) => ({
        ...state,
        exercises: [...state.exercises, exercise]
    })),
    on(addExerciseFailure, (state, { error }) => ({
        ...state,
        error: error
    })),
    on(editExerciseSuccess, (state, { exercise, index }) => {
        const model = {
            ...state.exercises[index],
            ...exercise
        }
        const updatedExercises = [...state.exercises];
        updatedExercises[index] = model;
        return {
            ...state,
            exercises: updatedExercises
        }
    }),
    on(editExerciseFailure, (state, { error }) => ({
        ...state,
        error: error
    })),
    on(deleteExerciseSuccess, (state, { exercise, index }) => {
        let newExercises = state.exercises.filter( (exercise, i) => {
            return i !== index;
        })
        return {
            ...state,
            exercises: newExercises
        }
    }),
    on(deleteExerciseFailure, (state, { error }) => ({
        ...state,
        error: error
    })),
);

export function exercisesReducer(state, action) {
    return _exercisesReducer(state, action);
}