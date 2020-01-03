import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: '/workouts', pathMatch: 'full' 
  },
  {
    path: 'workouts',
    loadChildren: './workouts/workouts.module#WorkoutsModule'
  },
  {
    path: 'exercises',
    loadChildren: './exercises/exercises.module#ExercisesModule'
  },
  {
    path: 'create-workouts',
    loadChildren: './create-workouts/create-workouts.module#CreateWorkoutsModule'
  },
  {
    path: 'create-exercises',
    loadChildren: './create-exercises/create-exercises.module#CreateExercisesModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

