import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dashboard } from 'src/app/shared/interfaces/Dashboard.interface';
import { LocalStorageService } from 'src/app/shared/services/localStorage/localStorage.service';
import { MockLocalStorageService } from 'src/app/shared/services/mockLocalStorage/mock-local-storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  API_URL = environment.API_URL

  userDashboard: string

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private mockLocalStorage: MockLocalStorageService,
  ) { }

  mockDashboard(): Observable<Dashboard> {
    const userSession = this.mockLocalStorage.getMockSession();

    if (userSession) {
      return of({
        contaBanco: {
          id: Number(userSession.conta.numero),
          lancamentos: [],
          saldo: 0,
        },
        contaCredito: {
          id: Number(userSession.contaCredito.numero),
          lancamentos: [],
          saldo: 0,
        },
      });
    }

    return of({
      contaBanco: {
        id: 0,
        lancamentos: [],
        saldo: 0,
      },
      contaCredito: {
        id: 0,
        lancamentos: [],
        saldo: 0,
      },
    });
  }

  dashboard(): Observable<Dashboard> {
    const user = this.localStorageService.getUser();

    if (user !== null) {
      this.userDashboard = user.nome;
    } else {
      this.userDashboard = 'USUARIO CACHE';
    }

    const httpParams = new HttpParams({
      fromObject: {
        fim: this.getData(),
        inicio: this.getData(),
        login: this.userDashboard,
      },
    });

    return this.http.get<Dashboard>(`${this.API_URL}/dashboard`, { params: httpParams });
  }

  getData(): string {
    const year = new Date().getFullYear();
    const month = new Date().toLocaleString('pt-BR', { month: '2-digit' });
    const day = new Date().toLocaleString('pt-BR', { day: '2-digit' });

    return `${year}-${month}-${day}`;
  }
}
