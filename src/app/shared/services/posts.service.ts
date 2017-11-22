import { AngularFirestore,
        AngularFirestoreCollection,
        AngularFirestoreDocument } from 'angularfire2/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PostModel } from '../models';

import { POSTS_COLLECTION } from '../consts';

@Injectable()
export class PostsService {

  public postsCol: AngularFirestoreCollection<PostModel>;
  public posts$: Observable<PostModel[]>;

  constructor(private afs: AngularFirestore) {
    this.postsCol = this.afs.collection(POSTS_COLLECTION);
    this.posts$ = this.postsCol.valueChanges();
  }

  public getPostsCollection() {
    return this.postsCol;
  }

  public getPosts$(): Observable<PostModel[]> {
    return this.postsCol.snapshotChanges()
      .map((actions) => {
        return actions.map( a => {
          const post = new PostModel(a.payload.doc.data());
          post.id = a.payload.doc.id;
          return post;
        });
      });
  }
}
