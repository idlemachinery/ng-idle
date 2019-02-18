import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

export abstract class GenericDataService<T> {
  protected apiUrl: string;
  protected logToConsole = true;

  constructor(private http: HttpClient) { }

  get(id: any): Observable<T> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<T>(url)
      .pipe(
        tap(data => {
          if (this.logToConsole === true) {
            console.log('get: ' + JSON.stringify(data));
          }
        }),
        catchError(this.handleError)
      );
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl)
      .pipe(
        tap(data => {
          if (this.logToConsole === true) {
            console.log(JSON.stringify(data));
          }
        }),
        catchError(this.handleError)
      );
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, item)
      .pipe(
        tap(data => {
          if (this.logToConsole === true) {
            console.log('post: ' + JSON.stringify(data));
          }
        }),
        catchError(this.handleError)
      );
  }

  update(item: T, id: any): Observable<T> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<T>(url, item)
      .pipe(
        tap(() => {
          if (this.logToConsole === true) {
            console.log('put: ' + id);
          }
        }),
        map(() => item),
        catchError(this.handleError)
      );
  }

  delete(id: any): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<T>(url)
      .pipe(
        tap(data => {
          if (this.logToConsole === true) {
            console.log('delete: ' + id);
          }
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (this.logToConsole === true) {
      console.error('server error:', error);
    }
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
        return throwError(errMessage);
        // Use the following instead if using lite-server
        // return Observable.throw(err.text() || 'backend server error');
    }
    return throwError(error || 'backend server error');
  }
}
