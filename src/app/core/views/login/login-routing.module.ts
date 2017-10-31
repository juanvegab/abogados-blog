import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';

const HOME_ROUTES: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(HOME_ROUTES)
  ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule { }
