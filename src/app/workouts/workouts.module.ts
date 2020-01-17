import { ModalModule } from '../shared/modal/modal.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkoutsComponent } from './workouts.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [WorkoutsComponent],
    imports: [
        ModalModule,
        CommonModule,
        RouterModule.forChild([{ path:'', component: WorkoutsComponent}])
    ]
})
export class WorkoutsModule {}