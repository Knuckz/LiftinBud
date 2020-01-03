import { RouterModule } from '@angular/router';
import { WorkoutsComponent } from './workouts.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [WorkoutsComponent],
    imports: [
        RouterModule.forChild([{ path:'', component: WorkoutsComponent}])
    ]
})
export class WorkoutsModule {}