import { Workout } from './../workout.model';
import { createAction, props } from '@ngrx/store';
import { Exercise } from 'src/app/exercises/exercises.model';

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

export const setTempExercises = createAction(
    '[Workouts Component] Set temp exercises',
    props<{ newTempExercises: Exercise[] }>()
);

export const clearTempExercises = createAction(
    '[Workouts Component] Clear temp exercises'
);

export const deleteTempExercise = createAction(
    '[Workouts Component] Delete temp exercises',
    props<{ deleteExercise: Exercise }>()
);

export const addTempExercise = createAction(
    '[Workouts component] Add temp exercises',
    props<{ tempExercise: Exercise}>()
);

export const editWorkout = createAction(
    '[Workouts Component] Edit workout',
    props<{ workout }>()
);

export const editWorkoutSuccess = createAction(
    '[Workouts Component] Edit workout success',
    props<{ workout }>()
);

export const editWorkoutFailure = createAction(
    '[Workouts component] Edit workout failure',
    props<{ error }>()
);

export const updateSelectedWorkout = createAction(
    '[Workouts component] Update selected workout',
    props<{ workoutId }>()
);