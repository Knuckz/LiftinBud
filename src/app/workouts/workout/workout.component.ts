import { getWorkouts } from './../store/workouts.selectors';
import { Component, OnInit, Input } from '@angular/core';
import * as fromApp from 'src/app/app.reducer'
import { Store } from '@ngrx/store';
import { Workout } from '../workout.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  @Input() workout: Workout;
  @Input() workoutIndex: number;

  constructor() { }

  ngOnInit() {
  }
}
