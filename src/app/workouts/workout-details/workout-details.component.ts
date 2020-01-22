import { Workout } from './../workout.model';
import { getWorkouts } from './../store/workouts.selectors';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import * as fromApp from 'src/app/app.reducer'
import { Store } from '@ngrx/store';
import { deleteWorkout } from '../store/workouts.actions';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.css']
})
export class WorkoutDetailsComponent implements OnInit {

  workoutId: number;
  workout: Workout;

  constructor(private route: ActivatedRoute, private store: Store<fromApp.AppState>, private router: Router) { }

  ngOnInit() {
    this.route.params.pipe(
      map(params => +params['id']),
      switchMap((id) => {
        this.workoutId = id;
        return this.store.select(getWorkouts)
      }),
      map((workouts) => workouts.find(( workout, index) => {
        return index === this.workoutId;
      }))
    ).subscribe((workout) => {
      this.workout = workout;
    })
  }

  onDelete(workout: Workout) {
    this.store.dispatch(deleteWorkout({ workout }))
    this.router.navigate(['..'], {relativeTo: this.route})
  }

}
