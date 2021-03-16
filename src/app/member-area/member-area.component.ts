import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Dashboard } from '../shared/interfaces/Dashboard.interface';
import { Usuario } from '../shared/interfaces/usuario/Usuario.interface';
import { LocalStorageService } from '../shared/services/localStorage/localStorage.service';
import { MemberAreaService } from './member-area.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './member-area.component.html',
  styleUrls: [
    './style/member-area.component.scss',
    './style/member-area-mobile.component.scss',
  ],
})
export class MemberAreaComponent implements OnInit {
  dashboard: Dashboard;

  user: Usuario | null;

  constructor(
    private memberAreaService: MemberAreaService,
    private router: Router,
    private localStorageservice: LocalStorageService,
  ) { }

  ngOnInit(): void {
    const user = this.localStorageservice.getUser();

    if (user) {
      this.user = this.localStorageservice.getUser();
    }
  }

  // Chamando a API para getPlanosConta
  // this.listaPlanos()

  // Chamando a API para criação de plano
  // valores pegos dos campos
  // this.criaPlanos("Salario do mês", "mandre", "D")

  // Chamando a API de lançamentos
  // this.criaLancamento()

  // listaPlanos() {
  //   this.nufakeDash.getPlanosConta()
  //     .pipe(
  //       take(1)
  //     ).subscribe(
  //       response => this.planoConta = response
  //     )
  // }

  // criaPlanos(descricao: string, login: string, tipoMovimento: string) {
  //   this.nufakeDash.planosConta({ descricao, login, tipoMovimento })
  //     .pipe(
  //       take(1)
  //     ).subscribe(
  //       response => this.onCreatePlansSuccess(),
  //       error => this.onErrorOnDashboard()
  //     )
  // }

  // criaLancamento() {

  //   // Esses valores são pegos dos campos dos lançamento
  //   this.nufakeDash.lancamentos({
  //     conta: 827,
  //     data: "2021-02-27",
  //     descricao: "PAGAMENTO CONTA DE INTERNET",
  //     login: "mandre",
  //     planoConta: 1610,
  //     valor: 1500
  //   })
  //     .pipe(
  //       take(1)
  //     ).subscribe(
  //       response => this.onCreateLancamentos(),
  //       error => this.onErrorOnDashboard()
  //     )
  // }

  // onCreatePlansSuccess() {
  //   console.log("Criação de plano bem sucedida")
  // }

  // onCreateLancamentos() {
  //   console.log("Lançamento realizado com sucesso")
  // }

  // onErrorOnDashboard() {
  //   console.log("OOps!, algo de errado aconteceu")
  // }

  logout() {
    this.localStorageservice.removeItemsOnStorage();
    this.router.navigate(['login']);
  }
}
