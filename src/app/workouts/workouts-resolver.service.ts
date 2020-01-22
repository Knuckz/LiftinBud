import * as workoutActions from './store/workouts.actions';
import { switchMap, take, map } from 'rxjs/operators';
import { getWorkouts } from './store/workouts.selectors';
import { Actions, ofType } from '@ngrx/effects';
import { AppState } from 'src/app/app.reducer';
import { of } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';

@Injectable({providedIn: 'root'})
export class workoutsResolverService implements Resolve<any>{
    
    constructor(
        private store: Store<AppState>, 
        private actions$: Actions
        ) { }

    resolve(route: ActivatedRouteSnapshot, routeState: RouterStateSnapshot) {
        return this.store.select(getWorkouts).pipe(
            take(1),
            switchMap(workouts => {
                if (workouts.length === 0){
                    this.store.dispatch(workoutActions.fetchWorkouts())
                    return this.actions$.pipe(
                        ofType(workoutActions.fetchWorkoutsSuccess),
                        take(1)
                    )
                } else {
                    return of(workouts)
                }
            })
        )
    }
}