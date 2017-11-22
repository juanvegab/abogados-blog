import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostEditComponent } from './edit';
import { PostDetailComponent } from './detail';

import { AuthService, PostsService, PostListingModule } from '../../../shared';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    PostListingModule
  ],
  declarations: [
    PostsComponent,
    PostEditComponent,
    PostDetailComponent
  ],
  providers: [
    AuthService,
    PostsService
  ]
})
export class PostsModule { }
