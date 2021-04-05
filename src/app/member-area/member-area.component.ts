import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dashboard } from '../shared/interfaces/Dashboard.interface';
import { Usuario } from '../shared/interfaces/usuario/Usuario.interface';
import { LocalStorageService } from '../shared/services/localStorage/localStorage.service';

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
    private router: Router,
    private localStorageservice: LocalStorageService,
  ) { }

  ngOnInit(): void {
    const user = this.localStorageservice.getUser();

    if (user) {
      this.user = this.localStorageservice.getUser();
    }
  }

  logout() {
    this.localStorageservice.removeItemsOnStorage();
    this.router.navigate(['login']);
  }
}
