import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostListingComponent } from './post-listing.component';
import { PostModule } from '../post/post.module';

@NgModule({
  imports: [
    CommonModule,
    PostModule,
    RouterModule
  ],
  exports: [
    PostListingComponent
  ],
  declarations: [
    PostListingComponent
  ]
})

export class PostListingModule { }
