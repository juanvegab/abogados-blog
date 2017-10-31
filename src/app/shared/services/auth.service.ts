import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../utils';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  private savedSessionTime: Date;

  constructor(private _firebaseAuth: AngularFireAuth,
    private router: Router,
    public localstorage: LocalStorageService) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe((user) => {
      if (user) {
        this.userDetails = user;
        this.saveSessionData(user);
      } else {
        this.userDetails = null;
      }
    });
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  signInWithEmail(email: string, password: string) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  createUserWithEmail(email: string, password: string) {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  isLoggedIn() {
    return this.getUserDetails() !== null && this.getUserDetails() !== '';
  }

  setSessionTime(sessionTime: string) {
    this.localstorage.set('sessionTime', sessionTime);
  }

  getSessionTime() {
    return this.localstorage.get('sessionTime');
  }

  setSessionDetails(userDetails) {
    this.localstorage.set('sessionUser', userDetails);
  }

  getUserDetails() {
    return this.localstorage.get('sessionUser');
  }

  saveSessionData(res) {
    this.setSessionDetails(res);
    this.setSessionTime(new Date().getTime().toString());
  }

  cleanSessionData() {
    this._firebaseAuth.auth.signOut().then((res) => {
      this.localstorage.remove('sessionUser');
      this.localstorage.remove('sessionTime');
      this.router.navigate(['/']);
    });
  }

  logout() {
    this.cleanSessionData();
  }
}
