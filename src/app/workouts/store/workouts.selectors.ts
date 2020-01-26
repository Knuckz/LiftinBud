import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromWorkouts from './workouts.reducer';
import { Workout } from '../workout.model';
import * as fromApp from 'src/app/app.reducer';
import { Exercise } from 'src/app/exercises/exercises.model';

export const workoutFeatureKey = 'workoutPage';

export const getWorkoutsPageState = createFeatureSelector<fromWorkouts.workoutsState>(workoutFeatureKey);
//export const getWorkoutsPageState = ((state : fromApp.AppState) => state.workoutPage)

export const getWorkouts = createSelector(getWorkoutsPageState, (workoutsPageState : fromWorkouts.workoutsState) : Workout[] => {
    return workoutsPageState.workouts;
})

export const getTempExercises = createSelector(getWorkoutsPageState, (workoutsPageState : fromWorkouts.workoutsState) : Exercise[] => {
    return workoutsPageState.tempExercises;
})

export const getSelectedWorkoutId = createSelector(getWorkoutsPageState, (workoutsPageState: fromWorkouts.workoutsState) : number => {
    return workoutsPageState.selectedWorkoutId;
})

export const getSelectedWorkout = createSelector(getWorkouts, getSelectedWorkoutId, (workouts: Workout[], selectedId: number) => {
    if (selectedId > 0 && !!workouts) {
        return workouts.find(workout => workout.id === selectedId);
    }
})