import { Component, OnInit } from '@angular/core';
import { AuthService, UserModel, UserService } from '../../../shared/';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public user$: Observable<UserModel>;

  constructor(public authService: AuthService,
              public userService: UserService) { }

  ngOnInit() {
    this.user$ = this.authService.user;
  }

  public logout() {
    this.authService.logout();
  }

}
