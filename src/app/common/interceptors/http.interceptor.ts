import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpErrorHandlerService } from '../services/http-error-handler/http-error-handler.service';

@Injectable()
export class HttpCustomInterceptor implements HttpInterceptor {
  constructor(protected errorHandlerService: HttpErrorHandlerService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // If custom headers need to be provided we can add them here

    return next.handle(request).pipe(
      retry(1), // retry request one time before throwing error
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        return this.errorHandlerService.handleError(error);
      })
    );
  }
}
