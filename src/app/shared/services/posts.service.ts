import { AngularFirestore,
        AngularFirestoreCollection,
        AngularFirestoreDocument } from 'angularfire2/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PostModel } from '../models';

import { USERS_COLLECTION } from '../consts';

@Injectable()
export class PostsService {

  public postsCol: AngularFirestoreCollection<PostModel>;
  public posts: Observable<PostModel[]>;

  constructor(private afs: AngularFirestore) {
    this.postsCol = this.afs.collection(USERS_COLLECTION);
    this.posts = this.postsCol.valueChanges();
  }

  public getUserCollection() {
    return this.postsCol;
  }

  public getUserObservable() {
    return this.posts;
  }
}
