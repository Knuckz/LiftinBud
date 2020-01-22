import { exercisesResolverService } from './../exercises/exercises-resolver.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ExercisesModule } from './../exercises/exercises.module';
import { ModalModule } from '../shared/modal/modal.module';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Resolve } from '@angular/router';
import { WorkoutsComponent } from './workouts.component';
import { NgModule } from "@angular/core";
import { ViewWorkoutsComponent } from './view-workouts/view-workouts.component';
import { CreateWorkoutsComponent } from './create-workouts/create-workouts.component';
import { WorkoutComponent } from './workout/workout.component';
import { workoutsResolverService } from './workouts-resolver.service';
import { WorkoutDetailsComponent } from './workout-details/workout-details.component';

export const routes: Routes = [
    {
        path: '',
        component: WorkoutsComponent,
        resolve: [workoutsResolverService, exercisesResolverService],
        children: [
            {
                path: '',
                redirectTo: 'view',
                pathMatch: 'full'
            },
            {
                path: 'view',
                component: ViewWorkoutsComponent,
                children: [
                    {
                        path: ':id',
                        component: WorkoutDetailsComponent
                    }
                ]
            },
            {
                path: 'create',
                component:CreateWorkoutsComponent
            }
        ]
    }
]
@NgModule({
    declarations: [WorkoutsComponent, ViewWorkoutsComponent, CreateWorkoutsComponent, WorkoutComponent, WorkoutDetailsComponent],
    imports: [
        ModalModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})
export class WorkoutsModule {}