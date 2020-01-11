import { ActionReducerMap } from '@ngrx/store';

import * as fromExercises from './exercises/store/exercises.reducer';

export interface AppState {
    exercisePage: fromExercises.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    exercisePage: fromExercises.exercisesReducer,
}