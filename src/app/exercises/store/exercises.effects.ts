import { Exercise } from './../exercises.model';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators'
import { of } from 'rxjs';
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
}