import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, PostModel, PostsService, UserService } from '../../../../shared/';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  public newPost: FormGroup;
  public pfControls: { [key: string]: AbstractControl; };

  public initPost: PostModel;

  constructor(public fb: FormBuilder,
              public authService: AuthService,
              public postService: PostsService,
              private router: Router) { }

  ngOnInit() {

    if (!this.initPost) {
      this.initPost = new PostModel({});
    }
    this.loadData(this.initPost);

    this.pfControls = this.newPost.controls;
  }

  public loadData(post: PostModel) {
    this.newPost = this.fb.group({
      title: [post.title, [Validators.required]],
      content: [post.content, [Validators.required]]
    });
  }

  public submit(post) {
    this.authService.user.subscribe((user) => {
      post.author = this.authService.getUserRef(user.UID).ref;
      this.postService.getPostsCollection().add(post).then((data) => {
        this.router.navigate(['/posts']);
      });
    });
  }

}
