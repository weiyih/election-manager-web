import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '@environments';
import { Voter } from '@app/model/voter';
import { User } from '@app/model/user';

@Injectable()
export class VoterService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {
    // this.electionSubject = new BehaviorSubject<Election[]>(this.getElections());
    // this.election = this.electionSubject.asObservable();
  }

  // Retrieve all elections
  getVoters(): Observable<Voter[]> {
    return this.http
      .post<Voter[]>(`${environment.apiUrl}/v1/admin/voters`, null)
      .pipe(catchError(this.handleError('getVoters', [])));
  }


  getUsers(): Observable<User[]> {
    return this.http
      .post<User[]>(`${environment.apiUrl}/v1/admin/users`, null)
      .pipe(catchError(this.handleError('getVoters', [])));
  }

  // TODO - alert errors to display on election pages
  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.

      return of(result as T);
      //   return throwError(`${operation} failed: ${error.message}`);
    };
  }
}
