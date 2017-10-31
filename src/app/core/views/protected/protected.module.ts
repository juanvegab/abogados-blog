import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AuthService, SharedModule } from '../../../shared';

import { ProtectedComponent } from './protected.component';

@NgModule({
  declarations: [
    ProtectedComponent
  ],
  exports: [
    ProtectedComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  providers: [
    AuthService
  ]
})

export class ProtectedModule { }
