import { Exercise } from './../exercises.model';
import { createAction, props } from '@ngrx/store';

export const fetchExercises = createAction('[Exercises Component] Fetch Exercises');

export const fetchExercisesSuccess = createAction(
    '[Exercises Component] Fetch Exercises Success',
    props<{ exercises: Exercise[] }>()
);

export const fetchExercisesFailure = createAction(
    '[Exercises Component] Fetch Exercises Failure',
    props<{ error: any }>()
)

export const addExercise = createAction(
    '[Exercises Component] Add Exercise',
    props<{ exercise: Exercise }>()
)
export const addExerciseSuccess = createAction(
    '[Exercises Component] Add Exercise Success',
    props<{ exercise: Exercise }>()
)
export const addExerciseFailure = createAction(
    '[Exercises Component] Add Exercise Failure',
    props<{ error: any }>()
)