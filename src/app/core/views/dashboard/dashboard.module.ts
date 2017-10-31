import { NgModule } from '@angular/core';

import { AuthService, SharedModule } from '../../../shared';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService
  ]
})

export class DashboardModule { }
