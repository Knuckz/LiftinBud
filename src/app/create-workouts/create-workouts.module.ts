import { RouterModule } from '@angular/router';
import { CreateWorkoutsComponent } from './create-workouts.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [CreateWorkoutsComponent],
    imports: [
        RouterModule.forChild([{ path:'', component: CreateWorkoutsComponent}])
    ]
})
export class CreateWorkoutsModule {}