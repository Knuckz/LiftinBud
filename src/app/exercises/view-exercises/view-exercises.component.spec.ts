import { ExerciseComponent } from './../exercise/exercise.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as fromExercises from '../store/exercises.reducer';

import { ViewExercisesComponent } from './view-exercises.component';
import { StoreModule } from '@ngrx/store';

describe('ViewExercisesComponent', () => {
  let component: ViewExercisesComponent;
  let fixture: ComponentFixture<ViewExercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExercisesComponent, ExerciseComponent ],
      imports: [
        StoreModule.forRoot(fromExercises.exercisesReducer)
      ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
