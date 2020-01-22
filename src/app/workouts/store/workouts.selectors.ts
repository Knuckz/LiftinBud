import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromWorkouts from './workouts.reducer';
import { Workout } from '../workout.model';
import * as fromApp from 'src/app/app.reducer';

export const workoutFeatureKey = 'workoutPage';

export const getWorkoutsPageState = createFeatureSelector<fromWorkouts.workoutsState>(workoutFeatureKey);
//export const getWorkoutsPageState = ((state : fromApp.AppState) => state.workoutPage)

export const getWorkouts = createSelector(getWorkoutsPageState, (workoutsPageState : fromWorkouts.workoutsState) : Workout[] => {
    return workoutsPageState.workouts;
})