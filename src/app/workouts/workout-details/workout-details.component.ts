import { clearTempExercises, deleteTempExercise, addTempExercise, editWorkout, updateSelectedWorkout } from './../store/workouts.actions';
import { getExercises } from './../../exercises/store/exercises.selectors';
import { Exercise } from './../../exercises/exercises.model';
import { addExercise } from './../../exercises/store/exercises.actions';
import { Workout } from './../workout.model';
import { getWorkouts, getTempExercises, getSelectedWorkout } from './../store/workouts.selectors';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import * as fromApp from 'src/app/app.reducer'
import { Store } from '@ngrx/store';
import { deleteWorkout, setTempExercises } from '../store/workouts.actions';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.css']
})
export class WorkoutDetailsComponent implements OnInit {

  workoutId: number;
  workout: Workout = new Workout;
  editMode: boolean = false;
  editForm: FormGroup;
  exerciseArray: Exercise[] = [];
  tempExercises: Exercise[] = [];
  deletedExerciseMap = {};

  constructor(
    private route: ActivatedRoute, 
    private store: Store<fromApp.AppState>, 
    private router: Router,
    private fb: FormBuilder
    ) { }

  get exercises() {
    return (this.editForm.get('exercises') as FormArray)
  }

  ngOnInit() {
    //use store, and route param to get selected workout
    this.getWorkoutDetails();

    this.store.select(getExercises).subscribe(exercises => {
      this.exerciseArray = exercises;
    })

    this.store.select(getTempExercises).subscribe(tempExercises => {
      this.tempExercises = tempExercises;
    })

    this.store.select(getSelectedWorkout).subscribe(workout => {
      this.workout = workout;
      this.store.dispatch(setTempExercises({ newTempExercises: this.workout.exercises }));
    })

    this.initEditForm();
  }

  getWorkoutDetails() {
    this.route.params.pipe(
      map(params => +params['id']),
      switchMap((id) => {
        this.workoutId = id;
        this.deletedExerciseMap = {};
        this.editMode = false;
        this.store.dispatch(setTempExercises({ newTempExercises: this.workout.exercises }));
        this.store.dispatch(updateSelectedWorkout({ workoutId: this.workoutId }))
        return this.store.select(getWorkouts)
      }),
      map((workouts) => workouts.find(( workout, index) => {
        return workout.id === this.workoutId;
      }))
    ).subscribe((workout) => {
      this.workout = workout;
    })
  }

  onAddExercise(exercise: Exercise) {
    (this.editForm.get('exercises') as FormArray).push(this.fb.control({value: `${exercise}`, disabled: false}));
  }

  onDelete(workout: Workout) {
    this.store.dispatch(deleteWorkout({ workout }))
    this.router.navigate(['..'], {relativeTo: this.route})
  }

  onDeleteExercise(exercise: Exercise, i: number) {
    if (!!exercise) {
      this.store.dispatch(deleteTempExercise({ deleteExercise: exercise }))
    }

    this.deletedExerciseMap[i] = true;
  }

  onAddTempExercise(exercise: Exercise, i: number) {
    if (!!exercise) {
      this.store.dispatch(addTempExercise({ tempExercise: exercise }));
    }

    if (i > -1) {
      delete this.deletedExerciseMap[i];
    }
  }

  checkMap(index: number) {
    if (this.deletedExerciseMap && this.deletedExerciseMap[index] === true) {
      return true;
    } else {
      return false;
    }
  }

  removeExercise(index: number) {
    this.exercises.removeAt(index)
  }

  onEdit() {
    this.editMode = true;
  }

  onSubmit() {
   this.editForm.value.exercises.forEach((exercise) => {
      this.onAddTempExercise(exercise, -1);
    })

    this.editMode = false;

    let newWorkout = {
      ...this.editForm.value,
      id: this.workout.id,
      exercises: this.tempExercises
    }

    this.store.dispatch(editWorkout({ workout: newWorkout }))
    this.onCancel();
  }

  onCancel() {
    this.exercises.clear();
    this.editMode = false;
    this.deletedExerciseMap = {};
  }

  initEditForm() {
    this.editForm = this.fb.group({
      name: [`${this.workout.name}`],
      description: [`${this.workout.description}`],
      exercises: this.fb.array([
      ])
    })
  }

}
