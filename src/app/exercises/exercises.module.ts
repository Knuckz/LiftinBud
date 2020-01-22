import { directivesModule } from './../directives/directives.module';
import { ModalModule } from './../shared/modal/modal.module';
import { CreateExercisesComponent } from './create-exercises/create-exercises.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from './exercises.component';
import { NgModule } from "@angular/core";
import { exercisesResolverService } from './exercises-resolver.service';
import { ExerciseComponent } from './exercise/exercise.component';
import { ViewExercisesComponent } from './view-exercises/view-exercises.component';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
    {
        path: '',
        component: ExercisesComponent,
        resolve: [exercisesResolverService],
        children: [
            {
                path: '',
                redirectTo: 'view',
                pathMatch: 'full'
            },
            {
                path: 'view',
                component: ViewExercisesComponent
            },
            {
                path: 'create',
                component: CreateExercisesComponent
            }
        ]
    }
]       

@NgModule({
    declarations: [ExercisesComponent, ExerciseComponent, ViewExercisesComponent, CreateExercisesComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ModalModule,
        directivesModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        ExerciseComponent
    ]
})
export class ExercisesModule { }