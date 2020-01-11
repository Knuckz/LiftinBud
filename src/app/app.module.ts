import { environment } from './../environments/environment';
import { exercisesEffects } from './exercises/store/exercises.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDbService}  from './Mock-Data/InMemoryDbService.service';

import { ExercisesModule } from './exercises/exercises.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { directivesModule } from './directives/directives.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import * as fromApp from './app.reducer';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    //creates a local database
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDbService, {dataEncapsulation: false }
    ),
    AppRoutingModule,
    directivesModule,
    WorkoutsModule,
    ExercisesModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([exercisesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 