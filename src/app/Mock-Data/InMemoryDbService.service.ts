import { Observable, of } from 'rxjs';
import { Exercise } from '../exercises/exercises.model';
import { EXERCISES, WORKOUTS } from './exercises';
import { Injectable } from '@angular/core';

//third party library that creates a local database
@Injectable({
    providedIn: 'root',
})
export class InMemoryDbService {
    createDb() {
        return { 'exercises': EXERCISES, 'workouts': WORKOUTS };
    }
}
