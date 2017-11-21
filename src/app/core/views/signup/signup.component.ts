import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public state: string;
  public error: string;

  public email: string;
  public password: string;

  constructor(public authService: AuthService,
    public router: Router) { }

  ngOnInit() {
    this.state = '';
  }

  onSubmit(formData) {
    // if (formData.valid) {
    //   console.log(formData.value);
    //   this.authService.createUserWithEmail(formData.value.email, formData.value.password)
    //   .then((success) => {
    //     console.log(success);
    //     this.router.navigate(['/dashboard']);
    //   }).catch(
    //     (err) => {
    //     console.log(err);
    //     this.error = err;
    //   });
    // }
  }
}
