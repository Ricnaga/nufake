import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../shared/interfaces/login/Login.interface';
import { NovaSenha } from '../shared/interfaces/login/NovaSenha.interface';

@Injectable({
  providedIn: 'root',
})
export class RecoverypassService {
  API_URL = environment.API_URL

  login: Login;

  constructor(
    private http: HttpClient,
  ) { }

  solicitarNovaSenha({ login, email }: NovaSenha): Observable<string> {
    if (login === 'mock' && email === 'mock@mock.com') {
      return of('stringSenhaTemp');
    }

    const newPassword = {
      email,
      login,
    };

    return this.http.post<string>(`${this.API_URL}/nova-senha`, newPassword);
  }
}
