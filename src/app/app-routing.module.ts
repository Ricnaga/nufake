import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersGuard } from './shared/guards/members.guard';
import { UsersGuard } from './shared/guards/users.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [UsersGuard],
  },
  {
    path: 'recovery',
    loadChildren: () => import('./recoverypass/recoverypass.module').then((m) => m.RecoverypassModule),
    canActivate: [UsersGuard],
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./recoverypass/changepassword/changepassword.module').then((m) => m.ChangepasswordModule),
    canActivate: [UsersGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./member-area/member-area.module').then((m) => m.MemberAreaModule),
    canActivate: [UsersGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [MembersGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () => import('./error/error.module').then((m) => m.ErrorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
