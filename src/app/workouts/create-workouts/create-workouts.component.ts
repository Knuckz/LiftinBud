import { Subscription } from 'rxjs';
import { Exercise, Descriptor } from './../../exercises/exercises.model';
import { getExercises } from './../../exercises/store/exercises.selectors';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import * as fromApp from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { addWorkout } from '../store/workouts.actions';
import { Workout } from '../workout.model';

@Component({
  selector: 'app-create-workouts',
  templateUrl: './create-workouts.component.html',
  styleUrls: ['./create-workouts.component.css']
})
export class CreateWorkoutsComponent implements OnInit {

  createWorkoutForm: FormGroup;
  exerciseArray: Exercise[] = [];
  subscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder, private store: Store<fromApp.AppState>) { }

  get exercises() {
    return (this.createWorkoutForm.get('exercises') as FormArray)
  }

  ngOnInit() {
    this.initForm();
    this.subscriptions.push(this.store.select(getExercises).subscribe(data => this.exerciseArray = data));

    console.log(this.createWorkoutForm);
  }

  ngOnDestroy() {
    this.subscriptions.map(sub => sub.unsubscribe());
  }

  onAddExercise() {
    (this.createWorkoutForm.get('exercises') as FormArray).push(this.fb.control({value: '', disabled: false}));
  }

  onDeleteExercise(position: number) {
    this.exercises.removeAt(position);
  }

  initForm() {
    this.createWorkoutForm = this.fb.group({
      name: [''],
      description: [''],
      exercises: this.fb.array([
        this.fb.control({value: '', disabled: false})
      ])
    })
  }
  onSubmit() {
    let submitedWorkout: Workout;
    let descriptorsArray = [];
    let uniqueDescriptors: Descriptor[] = [];
    let lookup = {}
    let descriptors = this.createWorkoutForm.value.exercises.map((exercise) => {
      return exercise.descriptor
    })

    descriptors.forEach((descriptor) => {
      descriptorsArray = [...descriptorsArray, ...descriptor]
    })

    descriptorsArray.forEach((descriptor) => {
      if (!lookup[descriptor.id]) {
        lookup[descriptor.id] = true;
        uniqueDescriptors.push(descriptor);
      }
    })

    submitedWorkout = {
      ...this.createWorkoutForm.value,
      descriptors: uniqueDescriptors
    }

    this.store.dispatch(addWorkout({ workout: submitedWorkout }));
  }
}
