import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../shared/interfaces/login/Login.interface';
import { Sessao } from '../shared/interfaces/Sessao.interface';
import { TokenService } from '../shared/services/tokens/token.service';

@Injectable({
  providedIn: 'root',
})
export class MemberAreaService {
  API_URL = environment.API_URL

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  login({ usuario, senha }: Login): Observable<Sessao> {
    return this.http.post<Sessao>(`${this.API_URL}/login`, { usuario, senha })
      .pipe(
        tap(
          (response) => {
            this.tokenService.setUser(response.usuario);
            this.tokenService.setToken(response.token);
          },
        ),
      );
  }
}
