import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: '/exercises/view', pathMatch: 'full' 
  },
  {
    path: 'workouts',
    loadChildren: './workouts/workouts.module#WorkoutsModule'
  },
  {
    path: 'exercises',
    loadChildren: './exercises/exercises.module#ExercisesModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

