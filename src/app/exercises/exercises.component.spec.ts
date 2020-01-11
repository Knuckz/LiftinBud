import { ReactiveFormsModule } from '@angular/forms';
import { ExerciseComponent } from './exercise/exercise.component';
import { CreateExercisesComponent } from './create-exercises/create-exercises.component';
import { routes } from './exercises.module';
import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import * as fromExercises from './store/exercises.reducer';

import { ExercisesComponent } from './exercises.component';
import { StoreModule } from '@ngrx/store';
import { ViewExercisesComponent } from './view-exercises/view-exercises.component';

describe('ExercisesComponent', () => {
  let component: ExercisesComponent;
  let fixture: ComponentFixture<ExercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(fromExercises.exercisesReducer),
        RouterModule.forRoot(routes),
        ReactiveFormsModule
      ],
      declarations: [ ExercisesComponent, ViewExercisesComponent, CreateExercisesComponent, ExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let component = new ExercisesComponent();
    expect(component).toBeTruthy();
  });

});
