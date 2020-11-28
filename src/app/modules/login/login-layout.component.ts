// App Login Layout Component


import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '@core/auth/authentication.service';

@Component({ templateUrl: 'login-layout.component.html' })
export class LoginLayoutComponent {
    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) {
        // TODO - check if user logged in
        // if (this.authService.userValue) {
        if (true) {
            this.router.navigate(['/']);
        }
    }
}
