import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AuthService, FooterModule, NavigationBarModule, SharedModule } from '../../../shared';

import { ProtectedComponent } from './protected.component';

@NgModule({
  declarations: [
    ProtectedComponent
  ],
  exports: [
    ProtectedComponent
  ],
  imports: [
    FooterModule,
    NavigationBarModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    AuthService
  ]
})

export class ProtectedModule { }
