import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../localStorage/localStorage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private localStorageService:LocalStorageService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      headers: request.headers.set('Authorization', this.localStorageService.getToken()),
    });
    return next.handle(request);
  }
}
