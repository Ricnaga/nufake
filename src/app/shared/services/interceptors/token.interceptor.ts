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
    const token = this.localStorageService.getToken();

    if (token !== null) {
      request = request.clone({
        headers: request.headers.set('Authorization', token),
      });
    }

    request = request.clone({
      headers: request.headers.set('Authorization', 'TOKEN INVÁLIDO'),
    });
    return next.handle(request);
  }
}
