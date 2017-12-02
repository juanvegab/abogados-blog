import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostEditComponent } from './edit';
import { PostDetailComponent } from './detail';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'create', component: PostEditComponent},
  { path: 'edit/:id', component: PostEditComponent},
  { path: ':id', component: PostDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class PostsRoutingModule { }
