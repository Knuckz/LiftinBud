import { addExercise } from './../store/exercises.actions';
import { Descriptor } from './../exercises.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder, Form, ReactiveFormsModule } from '@angular/forms';
import * as AppStore from 'src/app/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create-exercises',
  templateUrl: './create-exercises.component.html',
  styleUrls: ['./create-exercises.component.css']
})
export class CreateExercisesComponent implements OnInit {
  createExerciseForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<AppStore.AppState>) { }

  get descriptors() {
    return (this.createExerciseForm.get('descriptor')) as FormArray;
  }
  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.store.dispatch(addExercise({exercise: this.createExerciseForm.value}));
  }

  addDescriptor() {
    const descriptorArray = <FormArray>this.createExerciseForm.controls['descriptor'];
    const newDescriptor = this.initDescriptorForm();

    descriptorArray.push(newDescriptor);
  }

  onDeleteDescriptor(index: number) {
    this.descriptors.removeAt(index);
  }

  initForm() {
    this.createExerciseForm = this.fb.group({
      name: [''],
      description: [''],
      instructions: [''],
      descriptor: this.fb.array([
        this.fb.group({
          name: ['']
        })
      ])
    })        
  }
  //this needs to be a form group for descriptor. It is an object with a name and id

  initDescriptorForm() {
    return this.fb.group({
      name: ['']
    })
  }
}
