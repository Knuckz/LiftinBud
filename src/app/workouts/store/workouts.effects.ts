import { Workout } from './../workout.model';
import { map, switchMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as workoutsActions from './workouts.actions'
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class workoutsEffects {

    constructor(
        private actions$: Actions,
        private http: HttpClient
    ) { }

    $fetchWorkouts = createEffect(() =>
        this.actions$.pipe(
            ofType(workoutsActions.fetchWorkouts),
            switchMap(() => this.http.get<Workout[]>('api/workouts')
                .pipe(
                    map((workouts) => workoutsActions.fetchWorkoutsSuccess({workouts})),
                    catchError((error) => of(workoutsActions.fetchWorkoutsFailure({error})))
                )
            )
        ))

    $addWorkout = createEffect(() =>
        this.actions$.pipe(
            ofType(workoutsActions.addWorkout),
            switchMap(({ workout }) => this.http.post<Workout>('api/workouts', workout)
                .pipe(
                    map((workout) => workoutsActions.addWorkoutSuccess({ workout }),
                    catchError((error) => of(workoutsActions.addWorkoutFailure({ error }))))
                ))
        ))

    $deleteWorkout = createEffect(() =>
    this.actions$.pipe(
        ofType(workoutsActions.deleteWorkout),
        switchMap(( { workout }) => this.http.delete<Workout>(`api/workouts/${workout.id}`)
            .pipe(
                map(() => workoutsActions.deleteWorkoutSuccess({ workout })),
                catchError((error) => of(workoutsActions.deleteWorkoutFailure( {error} ))
            ))
        )
    ))

    $editWorkout = createEffect(() => 
        this.actions$.pipe(
            ofType(workoutsActions.editWorkout),
            switchMap(({ workout }) => this.http.put<Workout>(`api/workouts/${workout.id}`, workout)
                .pipe(
                    map(() => workoutsActions.editWorkoutSuccess({ workout })),
                    catchError((error) => of(workoutsActions.editWorkoutFailure({ error })))
                )
            )
        )
    )
}