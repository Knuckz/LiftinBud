import { Workout } from './../workout.model';
import { createAction, props } from '@ngrx/store';

export const fetchWorkouts = createAction('[Workouts Component] Fetch workouts');

export const fetchWorkoutsSuccess = createAction(
    '[Workouts Component] Fetch workouts Success',
    props<{ workouts: Workout[] }>()
);

export const fetchWorkoutsFailure = createAction(
    '[Workouts Component] Fetch workouts Failure',
    props<{ error: any }>()
)

export const addWorkout = createAction(
    '[Workouts Component] Add workout',
    props<{ workout: Workout }>()
);

export const addWorkoutSuccess = createAction(
    '[Workouts Component] Add workout success',
    props<{ workout: Workout}>()
);

export const addWorkoutFailure = createAction(
    '[Workouts Component] Add workout failure',
    props<{ error: any}>()
);

export const deleteWorkout = createAction(
    '[Workouts Component] Delete workout',
    props<{ workout: Workout }>()
);

export const deleteWorkoutSuccess = createAction(
    '[Workouts Component] Delete workout success',
    props<{ workout: Workout }>()
);

export const deleteWorkoutFailure = createAction(
    '[Workouts Component] Delete workout failure',
    props<{ error: any }>()
);