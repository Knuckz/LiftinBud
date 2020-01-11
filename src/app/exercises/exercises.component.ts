import { getExercisesPageState, getExercises } from './store/exercises.selectors';
import { AppState } from './../app.reducer';
import { Exercise } from './exercises.model';
import { fetchExercises } from './store/exercises.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromExercises from './store/exercises.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  ngOnInit() {

  }
}
