import { Component } from '@angular/core';
import { AuthenticationService } from './core/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // currentUser
  title = 'Blockchain Election Manager';

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
    // this.authService.
  }
}
