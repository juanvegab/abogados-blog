import { Injectable } from '@angular/core';
import { AngularFirestore,
        AngularFirestoreCollection,
        AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { UserModel } from '../models';

import { USERS_COLLECTION } from '../consts';

@Injectable()
export class UserService {

  constructor(private afs: AngularFirestore) {}

  getUsersCollection(): AngularFirestoreCollection<UserModel> {
    return this.afs.collection(USERS_COLLECTION);
  }

  getUsersListObservable(): Observable<UserModel[]> {
    return this.getUsersCollection().valueChanges();
  }

  getUserObservable(UID): Observable<UserModel[]> {
    const collection: AngularFirestoreCollection<UserModel>
      = this.afs.collection(USERS_COLLECTION, ref => ref.where('UID', '==', UID));
    return collection.valueChanges();
  }
}
