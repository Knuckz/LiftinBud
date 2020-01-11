import {
    createSelector,
    createFeatureSelector,
    combineReducers,
    Action,
} from '@ngrx/store';
import * as fromApp from '../../app.reducer';
import * as fromExercises from './exercises.reducer'

export const exerciseFeatureKey = 'exercisePage';

export const getExercisesPageState = createFeatureSelector<fromExercises.State>(exerciseFeatureKey);
//export const getExercisesPageState = (state: fromApp.AppState) => state.exercisePage;

export const getExercises = createSelector(getExercisesPageState, exercisesPageState => {
    if (!!exercisesPageState) {
        return exercisesPageState.exercises;
    }
});
export const getExercisesLoading = createSelector(getExercisesPageState, exercisesPageState => exercisesPageState.loading);
 
export const getExercisesLoaded = createSelector(getExercisesPageState, exercisesPageState => exercisesPageState.loaded);