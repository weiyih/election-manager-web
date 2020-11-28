import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../auth/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // User authorised
    // TODO - Load user from authService const user = this.authService.userValue;
    const user = null;
    if (user) {
      return true;
    }
    // User not logged in redirect to login page
    console.log('Auth Guard..');
    this.router.navigate(['/login']);
        // User not logged in redirect to login page
    console.log('Nav:', state.url);
    return false;

  }
}
