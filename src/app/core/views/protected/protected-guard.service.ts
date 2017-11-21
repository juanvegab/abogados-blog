import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from '../../../shared';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
  private static readonly MAX_SESSION_AGE = (30 * 60 * 1000);

  constructor(public auth: AuthService,
    public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.auth.user
          .take(1)
          .map(user => !!user)
          .do(loggedIn => {
            if (!loggedIn) {
              console.log('Access Denied');
              this.router.navigate(['/login']);
            }
          });



    // const isLoggedIn = this.auth.isLoggedIn();
    // const savedSessionTime = this.auth.getSessionTime();

    // if (isLoggedIn && this._isSessionAgeValid(savedSessionTime)) {
    //   return true;
    // } else {
    //   this.auth.cleanSessionData();
    //   this.router.navigate(['/login']);
    // }

    // return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
    Observable<any> {
    return this.canActivate(route, state);
  }

  private _isSessionAgeValid(savedSessionTime): boolean {
    return (new Date().getTime() - Number(savedSessionTime)) <= AuthGuard.MAX_SESSION_AGE;
  }
}
