import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AuthService,
         PostsService,
         PostModel,
         UserModel } from '../../../shared';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts$: Observable<PostModel[]>;
  public user$: Observable<UserModel>;

  constructor(private postsService: PostsService,
              private authService:  AuthService) { }

  ngOnInit() {
    this.posts$ = this.postsService.getPosts$();
    this.user$  = this.authService.user;
  }

}
