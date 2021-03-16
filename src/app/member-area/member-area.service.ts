import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dashboard } from '../shared/interfaces/Dashboard.interface';
import { LocalStorageService } from '../shared/services/localStorage/localStorage.service';
import { MockLocalStorageService } from '../shared/services/mockLocalStorage/mock-local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class MemberAreaService {
  API_URL = environment.API_URL

  userDashboard: string

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private mockLocalStorage: MockLocalStorageService,
  ) { }

  // getPlanosConta(): Observable<PlanoConta[]> {
  //   const httpParams = new HttpParams({
  //     fromObject: {
  //       login: 'mandre',
  //     },
  //   });

  //   return this.http.get<PlanoConta[]>(`${this.API_URL}/lancamentos/planos-conta`,
  //     { params: httpParams });
  // }

  // planosConta(conta: Omit<PlanoConta, 'id'|'padrao'>) {
  //   const { descricao, login, tipoMovimento } = conta;

  //   return this.http.post(`${this.API_URL}/lancamentos/planos-conta`,
  //     { descricao, login, tipoMovimento });
  // }
}
