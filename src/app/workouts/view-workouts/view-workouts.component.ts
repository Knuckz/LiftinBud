import { Component, OnInit } from '@angular/core';
import { Workout } from '../workout.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/app.reducer'
import { getWorkouts } from '../store/workouts.selectors';

@Component({
  selector: 'app-view-workouts',
  templateUrl: './view-workouts.component.html',
  styleUrls: ['./view-workouts.component.css']
})
export class ViewWorkoutsComponent implements OnInit {
  workouts: Workout[];
  subscriptions: Subscription[] = [];

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscriptions.push(this.store.select(getWorkouts).subscribe(workouts => this.workouts = workouts));
  }

  ngOnDestroy() {
    this.subscriptions.map((sub) => sub.unsubscribe());
  }
}
