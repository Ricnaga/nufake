import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Dashboard } from 'src/app/shared/interfaces/Dashboard.interface';
import { Usuario } from 'src/app/shared/interfaces/usuario/Usuario.interface';
import { LocalStorageService } from 'src/app/shared/services/localStorage/localStorage.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './styles/dashboard.component.scss',
    './styles/dashboard-mobile.component.scss',
  ],
})
export class DashboardComponent implements OnInit {
  dashboard: Dashboard;

  user: Usuario | null;

  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private localStorageservice: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.dashboardService.mockDashboard()
      .pipe(
        take(1),
      ).subscribe(
        (response) => {
          this.dashboard = response;
        },
      );

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
