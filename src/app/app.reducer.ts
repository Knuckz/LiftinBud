import { ActionReducerMap } from '@ngrx/store';

import * as fromExercises from './exercises/store/exercises.reducer';
import * as fromWorkouts from './workouts/store/workouts.reducer';

export interface AppState {
    exercisePage: fromExercises.exercisesState;
    workoutPage: fromWorkouts.workoutsState;
}

export const appReducer: ActionReducerMap<AppState> = {
    exercisePage: fromExercises.exercisesReducer,
    workoutPage: fromWorkouts.workoutsReducer,
}