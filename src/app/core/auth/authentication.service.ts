import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private router: Router) {}


  public isAuthenticated = new BehaviorSubject<boolean>(false);

  login(username: string, password: string): void {
    // const login_url = 'http://kevinwei.ca/admin/login';
    // return this.http.post(login_url)
    // Retrieve JWT Token
    // Store JWT token in local storage
  }

  // Logout
  // Removes user from local storage and redirects to login
  logout(): void {
    localStorage.clear();     // TODO - Remove only user data from local storage?
    this.router.navigate(['']);
  }
}
