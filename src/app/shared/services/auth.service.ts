import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../utils';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { UserService } from './users.service';
import { UserModel } from '../models';

@Injectable()
export class AuthService {

  public user: Observable<UserModel>;
  public userId: string;
  public userRef: AngularFirestoreDocument<UserModel>;
  private savedSessionTime: Date;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router,
              public localstorage: LocalStorageService) {
    this.user = afAuth.authState
      .switchMap( user => {
        if (user) {
          this.userId = user.uid;
          return afs.doc<UserModel>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      });
  }

  public signInWithGoogle() {
    return this.oAuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  public getUserRef(uid): AngularFirestoreDocument<UserModel> {
    return this.userRef ? this.userRef : this.afs.doc(`users/${uid}`);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }

  private updateUserData(user) {
    const data: UserModel = new UserModel(user);
    this.userRef = this.afs.doc(`users/${user.uid}`);
    this.userRef.set({...data});
  }

  public logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  // signInWithGoogle() {
  //   return this.afAuth.auth.signInWithPopup(
  //     new firebase.auth.GoogleAuthProvider()
  //   );
  // }

  // signInWithEmail(email: string, password: string) {
  //   return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  // }

  // createUserWithEmail(email: string, password: string) {
  //   return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  // }

  // isLoggedIn() {
  //   return this.getUserDetails() !== null && this.getUserDetails() !== '';
  // }

  // setSessionTime(sessionTime: string) {
  //   this.localstorage.set('sessionTime', sessionTime);
  // }

  // getSessionTime() {
  //   return this.localstorage.get('sessionTime');
  // }

  // setSessionDetails(userDetails) {
  //   this.localstorage.set('sessionUser', userDetails);
  // }

  // getUserDetails() {
  //   return this.localstorage.get('sessionUser');
  // }

  // saveSessionData(res) {
  //   this.setSessionDetails(res);
  //   this.setSessionTime(new Date().getTime().toString());
  // }

  // cleanSessionData() {
  //   this.afAuth.auth.signOut().then((res) => {
  //     this.localstorage.remove('sessionUser');
  //     this.localstorage.remove('sessionTime');
  //     this.router.navigate(['/']);
  //   });
  // }

  // logout() {
  //   this.cleanSessionData();
  // }
}
