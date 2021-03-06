import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { AuthGuard, ProtectedModule } from './core/';
import { LocalStorageService } from './shared/';

import { environment } from '../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import '../theme/styles.scss';

const APP_PROVIDERS = [
  AuthGuard,
  LocalStorageService,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProtectedModule,
    AppRoutes,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule { }
