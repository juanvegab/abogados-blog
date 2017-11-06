import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../shared/';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  public logout() {
    this.authService.logout();
  }

}
