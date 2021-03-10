import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dashboard } from '../shared/interfaces/Dashboard.interface';
import { LocalStorageService } from '../shared/services/localStorage/localStorage.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  API_URL = environment.API_URL

  userDashboard:string

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
  ) { }

  dashboard(): Observable<Dashboard> {
    const user = this.localStorageService.getUser();

    if (user !== null) {
      this.userDashboard = user.nome;
    } else {
      this.userDashboard = 'USUARIO INVALIDO';
    }

    if (this.userDashboard === 'mock') {
      return of({
        contaBanco: {
          id: 0,
          lancamentos: [
            {
              conta: 1,
              data: this.getData(),
              descricao: 'Lançamento de conta banco',
              id: 1,
              planoConta: {
                descricao: 'Plano conta de conta banco',
                id: 1,
                login: 'mock',
                padrao: true,
                tipoMovimento: 'R',
              },
              tipo: 'R',
              valor: 15000,
            },
          ],
          saldo: 0,
        },
        contaCredito: {
          id: 0,
          lancamentos: [
            {
              conta: 0,
              data: this.getData(),
              descricao: 'Lançamentos de conta crédito',
              id: 0,
              planoConta: {
                descricao: 'Plano conta de conta crédito',
                id: 0,
                login: 'mock',
                padrao: true,
                tipoMovimento: 'R',
              },
              tipo: 'R',
              valor: 10000,
            },
          ],
          saldo: 35880,
        },
      });
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
    return `${new Date().getFullYear()}-
    ${new Date().toLocaleString('pt-BR', { month: '2-digit' })}-
    ${new Date().toLocaleString('pt-BR', { day: '2-digit' })}`;
  }
}
