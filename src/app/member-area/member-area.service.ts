import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
    if (usuario === 'mock' && senha === 'mock') {
      const authenticatedUsuario = {
        cpf: '123456789',
        id: 1,
        login: 'mock',
        nome: 'mock',
        redefinirSenha: false,
        senha: 'mock',
        senhaTemporaria: 'temporaria',
      };

      this.tokenService.setUser(authenticatedUsuario);
      this.tokenService.setToken('073G37213c4308Rb3tChbt323cm');

      return of<Sessao>({
        conta: {
          descricao: 'Conta de usuário mock',
          id: 1,
          numero: '001',
          saldo: 25000,
          tipo: 'CC',
        },
        contaCredito: {
          descricao: 'Conta Crédito de usuário mock',
          id: 1,
          numero: '001',
          saldo: 15000,
          tipo: 'CB',
        },
        dataFim: '2021-03-09T19:19:41.130Z',
        dataInicio: '2021-03-09T19:19:41.130Z',
        token: '073G37213c4308Rb3tChbt323cm',
        usuario: authenticatedUsuario,
      });
    }

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
