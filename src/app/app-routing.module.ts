import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { MemberAreaComponent } from './member-area/member-area.component';
import { RecoverypassComponent } from './recoverypass/recoverypass.component';
import { UsersGuard } from './shared/guards/users.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [UsersGuard],
  },
  {
    path: 'recovery',
    component: RecoverypassComponent,
    canActivate: [UsersGuard],
  },
  {
    path: 'login', component: MemberAreaComponent,
  },
  {
    path: 'dashboard', component: DashboardComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**', component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
