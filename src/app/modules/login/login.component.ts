import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../core/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginUrl: string;
  error = '';
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
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    // this.loginUrl =
  }

  // Login button submit
  onSubmit(): void {
    const form = this.loginForm.value;
    const username = form.username;
    const password = form.password;

    // Validate required username/password
    if (this.loginForm.invalid) {
      return;
    }
    // this.authService.login(username, password)
    // .subscribe(
    //   () => {
    // Navigate to the main page
    //     this.router.navigate()

    // });
  }
}
