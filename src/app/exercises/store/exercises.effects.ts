import { Exercise } from './../exercises.model';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators'
import { of, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import * as exerciseActions from './exercises.actions';

@Injectable()
export class exercisesEffects {

    constructor(
        private actions$: Actions,
        private http: HttpClient
    ) { };

    fetchExercises$ = createEffect(() => this.actions$.pipe(
        ofType(exerciseActions.fetchExercises),
        switchMap(() => this.http.get<Exercise[]>('api/exercises')
            .pipe(
                map(exercises =>
                    exerciseActions.fetchExercisesSuccess({ exercises })
                ),
                catchError((error) => {
                    return of(exerciseActions.fetchExercisesFailure({ error }))
                })
            )
        )
    )
    )

    addExercise$ = createEffect(() => this.actions$.pipe(
        ofType(exerciseActions.addExercise),
        switchMap(({ exercise }) => this.http.post<Exercise>('api/exercises', exercise)
            .pipe(
                map(exercise => 
                    exerciseActions.addExerciseSuccess({ exercise })),
                catchError((error) => {
                    return of(exerciseActions.addExerciseFailure({ error }))
                })
            )
        )
    ))

    editExercise$ = createEffect(() => this.actions$.pipe(
        ofType(exerciseActions.editExercise),
        switchMap(({ exercise, index }) => this.http.put<Exercise>(`api/exercises/${exercise.id}`, exercise)
            .pipe(
                map(() => exerciseActions.editExerciseSuccess({ exercise, index })),
                catchError((error) => {
                    return of(exerciseActions.editExerciseFailure({ error }))
                })
            )
        )
    ))

    deleteExercise$ = createEffect(() => this.actions$.pipe(
        ofType(exerciseActions.deleteExercise),
        switchMap(({ exercise, index }) => this.http.delete<Exercise>(`api/exercises/${exercise.id}`)
            .pipe(
                map(() => exerciseActions.deleteExerciseSuccess({ exercise, index })),
                catchError((error) => {
                    return of(exerciseActions.deleteExerciseFailure({ error }))
                })
            )
        )
    ))
}