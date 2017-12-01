import { NgModule } from '@angular/core';

import { AuthService, UserService, PostListingModule, PostsService, SharedModule } from '../../../shared';

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
    PostListingModule,
    SharedModule
  ],
  providers: [
    AuthService,
    PostsService,
    UserService
  ]
})

export class DashboardModule { }
