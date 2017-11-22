import { Component, Input, OnInit } from '@angular/core';

import { PostModel,
         UserModel } from '../../../shared';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.scss']
})
export class PostListingComponent implements OnInit {

  @Input()
  public posts: PostModel[];

  @Input()
  public user: UserModel;

  @Input()
  public isThumbnail = false;

  constructor() { }

  ngOnInit() { }

}
