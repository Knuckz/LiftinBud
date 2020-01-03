import { RouterModule } from '@angular/router';
import { CreateExercisesComponent } from './create-exercises.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [CreateExercisesComponent],
    imports: [
        RouterModule.forChild([{ path:'', component: CreateExercisesComponent}])
    ]
})
export class CreateExercisesModule {}