import { getExercises } from './../store/exercises.selectors';
import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercises.model';
import { Store } from '@ngrx/store'
import {AppState} from 'src/app/app.reducer'
@Component({
  selector: 'app-view-exercises',
  templateUrl: './view-exercises.component.html',
  styleUrls: ['./view-exercises.component.css']
})
export class ViewExercisesComponent implements OnInit {

  exercises: Exercise[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
      this.store.select(getExercises)
      .subscribe((exercises: Exercise[]) => {
        this.exercises = exercises;
    })
  }

}
