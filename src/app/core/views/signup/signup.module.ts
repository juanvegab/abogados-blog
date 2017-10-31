import { NgModule } from '@angular/core';

import { AuthService, SharedModule } from '../../../shared';

import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
  declarations: [
    SignupComponent
  ],
  exports: [
    SignupComponent
  ],
  imports: [
    SignupRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService
  ]
})

export class SignupModule { }
