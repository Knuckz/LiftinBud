import { RouterModule } from '@angular/router';
import { ExercisesComponent } from './exercises.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [ExercisesComponent],
    imports: [
        RouterModule.forChild([{ path:'', component: ExercisesComponent}])
    ]
})
export class ExercisesModule {}