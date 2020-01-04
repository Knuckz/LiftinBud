import { fetchExercises } from './store/exercises.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromExercises from './store/exercises.reducer';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  constructor(private store: Store<fromExercises.State>) { }

  ngOnInit() {
    this.store.dispatch(fetchExercises());
    this.store.select('exercises').subscribe(exercises => console.log(exercises))
  }

}
