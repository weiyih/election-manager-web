import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../core/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginUrl: string;
  loginError = '';
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) {
    // TODO - Navigate if authenticated
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });

    // this.loginUrl =
  }

  //   getErrorMessage() {
  //     this.loginForm.controls
  //     if (this.loginForm.username.hasError('required')) {
  //       return 'You must enter a value';
  //     }

  //     return this.email.hasError('email') ? 'Not a valid email' : '';
  //   }
  // }

  // Login button submit
  onSubmit(): void {
    const form = this.loginForm.value;
    const username = form.username;
    const password = form.password;

    // Validate required username/password
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(username, password)
      .pipe(first())
      .subscribe((data) => {
        this.router.navigate(['main']);
      });
    // .subscribe(
    //   () => {
    // Navigate to the main page
    //     this.router.navigate()

    // });
  }
}
