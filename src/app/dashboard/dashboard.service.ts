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
          id: 1,
          lancamentos: [
            {
              conta: 1,
              data: this.getData(),
              descricao: 'Compra no débito',
              id: 1,
              planoConta: {
                descricao: 'Gama Academy',
                id: 1,
                login: 'mock',
                padrao: true,
                tipoMovimento: 'R',
              },
              tipo: 'R',
              valor: 298.58,
            },
          ],
          saldo: 15520.50,
        },
        contaCredito: {
          id: 1,
          lancamentos: [
            {
              conta: 1,
              data: this.getData(),
              descricao: 'Compra no crédito',
              id: 1,
              planoConta: {
                descricao: 'Accenture',
                id: 1,
                login: 'mock',
                padrao: true,
                tipoMovimento: 'R',
              },
              tipo: 'R',
              valor: 1358.27,
            },
          ],
          saldo: 35880.5,
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
    return `${new Date().getFullYear()}-${new Date().toLocaleString('pt-BR', { month: '2-digit' })}-${new Date().toLocaleString('pt-BR', { day: '2-digit' })}`;
  }

  // getPlanosConta(): Observable<PlanoConta[]> {
  //   const httpParams = new HttpParams({
  //     fromObject: {
  //       login: 'mandre',
  //     },
  //   });

  //   return this.http.get<PlanoConta[]>(`${this.API_URL}/lancamentos/planos-conta`, { params: httpParams });
  // }

  // planosConta(conta: Omit<PlanoConta, 'id'|'padrao'>) {
  //   const { descricao, login, tipoMovimento } = conta;

  //   return this.http.post(`${this.API_URL}/lancamentos/planos-conta`, { descricao, login, tipoMovimento });
  // }
}
