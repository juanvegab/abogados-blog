import { Component, Input, OnInit } from '@angular/core';

import { PostModel,
         UserModel } from '../../../shared';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  public isThumbnail = false;

  @Input()
  public post: PostModel;

  @Input()
  public user: UserModel;

  constructor() { }

  ngOnInit() { }

}
