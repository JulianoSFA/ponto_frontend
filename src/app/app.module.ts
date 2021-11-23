import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {JsonApiModule} from "angular2-jsonapi";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JsonApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
