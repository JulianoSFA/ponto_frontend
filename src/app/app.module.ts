import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {JsonApiModule} from "angular2-jsonapi";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ApiInterceptor} from "./api.interceptor";
import { LoginComponent } from './modules/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {ReactiveFormsModule} from "@angular/forms";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/compat/firestore";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JsonApiModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'dark'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
