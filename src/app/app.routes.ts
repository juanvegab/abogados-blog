/**
 * Routes for the control panel UI
 */
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AuthGuard, ProtectedComponent } from './core';

const PROTECTED_ROUTES: Routes = [
  { path: 'dashboard',
    loadChildren: './core/views/dashboard/dashboard.module#DashboardModule' }
];

const PUBLIC_ROUTES: Routes = [
  { path: '',
    redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',
    loadChildren: './core/views/login/login.module#LoginModule' },
  { path: 'signup',
    loadChildren: './core/views/signup/signup.module#SignupModule' },
];

const APP_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    children: PUBLIC_ROUTES
  },
  {
    path: '',
    component: ProtectedComponent,
    canActivate: [ AuthGuard ],
    canActivateChild: [ AuthGuard ],
    children: PROTECTED_ROUTES
  }
];

export const AppRoutes = RouterModule.forRoot(APP_ROUTES, { useHash: true });
