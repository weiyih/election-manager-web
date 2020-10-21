import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): void {
    // const login_url = 'http://kevinwei.ca/admin/login';
    // return this.http.post(login_url)
    // Retrieve JWT Token
  }

  logout(): void {
    // TODO - Remove all user data from local storage
  }
}
