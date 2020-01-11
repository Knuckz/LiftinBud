import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as fromExercises from '../store/exercises.reducer';

import { CreateExercisesComponent } from './create-exercises.component';
import { StoreModule } from '@ngrx/store';

describe('CreateExercisesComponent', () => {
  let component: CreateExercisesComponent;
  let fixture: ComponentFixture<CreateExercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExercisesComponent ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot(fromExercises.exercisesReducer),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
