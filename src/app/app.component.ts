import { Component } from '@angular/core';
import { AuthenticationService } from './core/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  // currentUser
  // user: User;

  constructor(private authService: AuthenticationService) {
    // this.authService.
  }
}
