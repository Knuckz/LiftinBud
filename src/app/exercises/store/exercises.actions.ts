import { Exercise } from './../exercises.model';
import { createAction, props } from '@ngrx/store';

export const fetchExercises = createAction('[Exercises Component] Fetch Exercises');
export const fetchExercisesSuccess = createAction(
    '[Exercises Component] Fetch Exercises Success', 
    props<{ exercises: Exercise[]}> () 
);
export const fetchExercisesFailure = createAction(
    '[Exercises Component] Fetch Exercises Failure',
    props<{ error: any }>()
)