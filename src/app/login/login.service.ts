import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../shared/interfaces/login/Login.interface';
import { Sessao } from '../shared/interfaces/Sessao.interface';
import { Usuario } from '../shared/interfaces/usuario/Usuario.interface';
import { LocalStorageService } from '../shared/services/localStorage/localStorage.service';
import { MockLocalStorageService } from '../shared/services/mockLocalStorage/mock-local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  API_URL = environment.API_URL

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private mockLocalStorage: MockLocalStorageService,
  ) { }

  mockLogin({ usuario, senha }: Login): Observable<Sessao> {
    const mockUser = this.mockLocalStorage.getMockUserDTO();

    if (mockUser) {
      const authUsuario:Usuario = {
        cpf: String(mockUser.cpf),
        id: Math.floor(Math.random() * 10),
        login: mockUser.login,
        nome: mockUser.nome,
        redefinirSenha: false,
        senha: mockUser.senha,
        senhaTemporaria: '',
      };

      const createToken = '073G37213c4308Rb3tChbt323cm';
      const dateNow = new Date();

      const session:Sessao = {
        conta: {
          descricao: 'Conta de usuário mock',
          id: authUsuario.id,
          numero: String(Math.floor(Math.random() * 100000)),
          saldo: 0,
          tipo: 'CC',
        },
        contaCredito: {
          descricao: 'Conta Crédito de usuário mock',
          id: authUsuario.id,
          numero: String(Math.floor(Math.random() * 100000)),
          saldo: 0,
          tipo: 'CB',
        },
        dataFim: `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`,
        dataInicio: `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`,
        token: createToken,
        usuario: authUsuario,
      };

      this.localStorageService.setUser(authUsuario);
      this.localStorageService.setToken(createToken);
      this.mockLocalStorage.setMockSession(session);

      return of<Sessao>(session);
    }

    return of<Sessao>({
      conta: {
        descricao: 'Conta generica',
        id: 0,
        numero: '000000',
        saldo: 0,
        tipo: 'CC',
      },
      contaCredito: {
        descricao: 'Conta Crédito generica',
        id: 0,
        numero: '000000',
        saldo: 0,
        tipo: 'CB',
      },
      dataFim: '2021-03-09T19:19:41.130Z',
      dataInicio: '2021-03-09T19:19:41.130Z',
      token: '00000000000000000000000',
      usuario: {
        cpf: '0000000000000',
        id: 0,
        login: 'generico',
        nome: 'generico',
        redefinirSenha: false,
        senha: '00000',
        senhaTemporaria: '',
      },
    });
  }

  login({ usuario, senha }: Login): Observable < Sessao > {
    return this.http.post<Sessao>(`${this.API_URL}/login`, { usuario, senha })
      .pipe(
        tap(
          (response) => {
            this.localStorageService.setUser(response.usuario);
            this.localStorageService.setToken(response.token);
          },
        ),
      );
  }
}
