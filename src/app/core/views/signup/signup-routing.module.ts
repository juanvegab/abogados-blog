import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup.component';

const HOME_ROUTES: Routes = [
  { path: '', component: SignupComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(HOME_ROUTES)
  ],
  exports: [ RouterModule ]
})
export class SignupRoutingModule { }
