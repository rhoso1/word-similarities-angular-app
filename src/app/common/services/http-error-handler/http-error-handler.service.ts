import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class HttpErrorHandlerService {
  constructor(protected router: Router) {}

  handleError(httpError: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (httpError.error?.Password) {
      errorMessage = httpError.error.Password[0];
    } else if (httpError.error?.global) {
      errorMessage = httpError.error.global[0];
    } else if (httpError.error instanceof ErrorEvent) {
      errorMessage = `Error: ${httpError.error.message}`;
    } else {
      errorMessage = `Error Code: ${httpError.status}\nMessage: ${httpError.message}`;
    }

    return throwError(() => errorMessage);
  }
}
