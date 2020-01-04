import { exercisesEffects } from './exercises/store/exercises.effects';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDbService}  from './Mock-Data/InMemoryDbService.service';

import { CreateExercisesModule } from './create-exercises/create-exercises.module';
import { CreateWorkoutsModule } from './create-workouts/create-workouts.module';
import { ExercisesModule } from './exercises/exercises.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { directivesModule } from './directives/directives.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { exercisesReducer } from './exercises/store/exercises.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //creates a local database
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDbService, {dataEncapsulation: false }
    ),
    AppRoutingModule,
    directivesModule,
    WorkoutsModule,
    ExercisesModule,
    CreateWorkoutsModule,
    CreateExercisesModule,
    StoreModule.forRoot({ exercises: exercisesReducer}),
    EffectsModule.forRoot([exercisesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
