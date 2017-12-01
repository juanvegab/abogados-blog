import { Component, OnInit } from '@angular/core';
import { AuthService, PostModel, PostsService, UserModel, UserService } from '../../../shared/';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public user$: Observable<UserModel>;
  public posts$: Observable<PostModel[]>;

  constructor(public authService: AuthService,
              public postService: PostsService,
              public userService: UserService) { }

  ngOnInit() {
    this.user$ = this.authService.user;
    this.posts$ = this.postService.getPosts$();
  }

  public logout() {
    this.authService.logout();
  }

}
