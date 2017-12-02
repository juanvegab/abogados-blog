import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService, PostModel, PostsService, UserModel } from '../../../../shared/';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  public post$: Observable<PostModel>;
  public user$: Observable<UserModel>;

  constructor(public authService: AuthService,
              public postService: PostsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user$ = this.authService.user;
    this.activatedRoute.params.subscribe((params: Params) => {
      const postId = params['id'];
      this.post$ = this.postService.getPost$(postId);
    });
  }
}
