import { AppState } from './../app.reducer';
import { Actions, ofType } from '@ngrx/effects';
import { Exercise } from './exercises.model';
import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import * as fromExercises from './store/exercises.reducer';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { take, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ExercisesActions from './store/exercises.actions';

@Injectable({ providedIn: 'root' })
export class exercisesResolverService implements Resolve<any>{

    constructor(
        private store: Store<AppState>,
        private actions$: Actions
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select('exercisePage').pipe(
            take(1),
            map(exercisesState => {
                return exercisesState.exercises;
            }),
            switchMap(exercises => {
                if (exercises.length === 0) {
                    this.store.dispatch(ExercisesActions.fetchExercises());
                    return this.actions$.pipe(
                        ofType(ExercisesActions.fetchExercisesSuccess),
                        take(1)
                    );
                } else {
                    return of(exercises);
                }
            })
        );
    };
};