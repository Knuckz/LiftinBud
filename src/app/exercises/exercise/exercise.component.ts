import { getExercises } from './../store/exercises.selectors';
import { AppState } from './../../app.reducer';
import { Exercise } from './../exercises.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AppStore from 'src/app/app.reducer';
import { editExercise, deleteExercise } from '../store/exercises.actions';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  @Input() exercise: Exercise;
  @Input() exerciseIndex: number;
  initialExercise: Exercise = new Exercise();
  editMode: boolean = false;
  isClosed: boolean = false;
  editExerciseForm: FormGroup;
  name: string;
  description: string;
  instructions: string;

  constructor(private fb: FormBuilder, private store: Store<AppStore.AppState>) { }

  get descriptors() {
    return (this.editExerciseForm.get('descriptor')) as FormArray;
  }

  onToggle(isOpen: boolean) {
    if (!isOpen && !!this.editMode) {
      this.stopEditing();
    }
  }

  ngOnInit() {
    this.initialExercise = this.exercise;
  }

  startEditing() {
    this.initForm();
    this.editMode = true;
  }

  stopEditing() {
    this.editExerciseForm.reset();
    this.editMode = false;
  }

  deleteExercise() {
    this.store.dispatch(deleteExercise({exercise: this.exercise, index: this.exerciseIndex}))
  }

  onSubmit() {
    let newExercise: Exercise = this.editExerciseForm.value;
    newExercise.id = this.exercise.id;
    console.log(newExercise);
    this.store.dispatch(editExercise({exercise: newExercise, index: this.exerciseIndex}));
  }

  addDescriptor(name?: string) {
    const descriptorArray = <FormArray>this.editExerciseForm.controls['descriptor'];
    const newDescriptor = this.initDescriptorForm(name);

    descriptorArray.push(newDescriptor);
  }

  onDeleteDescriptor(index: number) {
    this.descriptors.removeAt(index);
  }

  initForm() {
    this.editExerciseForm = this.fb.group({
      name: [`${this.exercise.name}`],
      description: [`${this.exercise.description}`],
      instructions: [`${this.exercise.instructions}`],
      descriptor: this.fb.array([ ])
    }) 

    for (let i = 0; i < this.exercise.descriptor.length; i ++) {
      this.addDescriptor(this.exercise.descriptor[i].name);
    }

    this.editMode = true;
  }

  initDescriptorForm(name: string) {
    let descriptor = name ? name : '';

    return this.fb.group({
      name: [`${descriptor}`]
    })
  }

  resetForm() {
    this.editExerciseForm.controls['name'].setValue(this.initialExercise.name);
    this.editExerciseForm.controls['description'].setValue(this.initialExercise.description);
    this.editExerciseForm.controls['instructions'].setValue(this.initialExercise.instructions);
    this.descriptors.clear();

    for (let i = 0; i < this.initialExercise.descriptor.length; i++) {
      this.addDescriptor(this.initialExercise.descriptor[i].name);
    }
  }
}
