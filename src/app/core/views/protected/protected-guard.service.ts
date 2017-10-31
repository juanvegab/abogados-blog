import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from '../../../shared';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  private static readonly MAX_SESSION_AGE = (30 * 60 * 1000);

  constructor(public authService: AuthService,
    public router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    const savedSessionTime = this.authService.getSessionTime();

    if (isLoggedIn && this._isSessionAgeValid(savedSessionTime)) {
      return true;
    } else {
      this.authService.cleanSessionData();
      this.router.navigate(['/login']);
    }

    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
    Observable<any> {
    return this.canActivate();
  }

  private _isSessionAgeValid(savedSessionTime): boolean {
    return (new Date().getTime() - Number(savedSessionTime)) <= AuthGuard.MAX_SESSION_AGE;
  }
}
