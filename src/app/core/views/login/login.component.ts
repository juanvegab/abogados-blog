import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn, AuthService } from '../../../shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIn()],
  // host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  public error: string;

  constructor(public authService: AuthService,
    public router: Router) { }

  ngOnInit() {}

  login() {
    this.authService.signInWithGoogle()
    .then((succes) => {
      console.log(succes);
      this.router.navigate(['/dashboard']);
    }).catch((error) => {
      console.log(error);
      this.error = error;
    });
  }
}
