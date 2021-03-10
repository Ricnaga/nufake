import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Dashboard } from '../shared/interfaces/Dashboard.interface';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './style/dashboard.component.scss',
    './style/dashboard-mobile.component.scss',
  ],
})
export class DashboardComponent implements OnInit {
  dashboard:Dashboard;

  constructor(
    private dashboardService:DashboardService,
  ) { }

  ngOnInit(): void {
    this.dashboardService.dashboard()
      .pipe(
        take(1),
      ).subscribe(
        (response) => {
          this.dashboard = response;
        },
      );
  }

  logout() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
  }
}
