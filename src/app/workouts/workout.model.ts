import { Descriptor } from './../exercises/exercises.model';
import { Exercise } from '../exercises/exercises.model';

export class Workout {
    public id: number;
    public name: string;
    public description: string;
    public exercises: Exercise[];
    public descriptors: Descriptor[];
    public creatorId: number;
    public creatorName: string;
    constructor() {
        this.exercises = new Array<Exercise>();
        this.descriptors = new Array<Descriptor>()
    }
}