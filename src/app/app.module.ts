import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgDragDropModule } from 'ng-drag-drop';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SamplesComponent } from './samples/samples.component';
import { ExptsComponent } from './expts/expts.component';
import { ReplicatesComponent } from './replicates/replicates.component';
import { ControlsComponent } from './controls/controls.component';
import { PlatesComponent } from './plates/plates.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    SamplesComponent,
    ExptsComponent,
    ReplicatesComponent,
    ControlsComponent,
    PlatesComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
      BrowserAnimationsModule,
    FlexLayoutModule,
    NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
