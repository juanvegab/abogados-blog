import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const HOME_ROUTES: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(HOME_ROUTES)
  ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule { }
