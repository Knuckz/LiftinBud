import { CreateExercisesModule } from './create-exercises/create-exercises.module';
import { CreateWorkoutsModule } from './create-workouts/create-workouts.module';
import { ExercisesModule } from './exercises/exercises.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { directivesModule } from './directives/directives.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    directivesModule,
    WorkoutsModule,
    ExercisesModule,
    CreateWorkoutsModule,
    CreateExercisesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
