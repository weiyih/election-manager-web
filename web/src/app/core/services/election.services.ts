import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '@environments';
import { Election } from '@app/model/election';

@Injectable()
export class ElectionService {
    public election: Observable<Election[]>;

    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      };

    constructor(
        private http: HttpClient
    ) {
        // this.electionSubject = new BehaviorSubject<Election[]>(this.getElections());
        // this.election = this.electionSubject.asObservable();
    }

    // Create new election
    create(election: Election) {
        return this.http.post(`${environment.apiUrl}/v1/create`, election);
    }

    // ONLY returns a single array of elections
    getElections(): Observable<Election[]> {
        return this.http.get<Election[]>(`${environment.apiUrl}/election`)
            .pipe(
                catchError(this.handleError('getElections', []))
            );
    }

    // update(id, params) {
    //     return this.http.put(`${environment.apiUrl}/election/${id}`, params)
    //         .pipe(map(x => {
    //             // update stored user if the logged in user updated their own record
    //             if (id == this.userValue.id) {
    //                 // update local storage
    //                 const user = { ...this.userValue, ...params };
    //                 localStorage.setItem('user', JSON.stringify(user));

    //                 // publish updated user to subscribers
    //                 this.userSubject.next(user);
    //             }
    //             return x;
    //         }));
    // }

    // delete(id: string) {
    //     return this.http.delete(`${environment.apiUrl}/users/${id}`)
    //         .pipe(map(x => {
    //             // auto logout if the logged in user deleted their own record
    //             if (id == this.userValue.id) {
    //                 this.logout();
    //             }
    //             return x;
    //         }));
    // }

    private handleError<T>(operation: string = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error); 
          console.log(`${operation} failed: ${error.message}`);
          // Let the app keep running by returning an empty result.

          return of(result as T);
        //   return throwError(`${operation} failed: ${error.message}`);
        };
      }
}
