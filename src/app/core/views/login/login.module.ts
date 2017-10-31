import { NgModule } from '@angular/core';

import { AuthService, SharedModule } from '../../../shared';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService
  ]
})

export class LoginModule { }
