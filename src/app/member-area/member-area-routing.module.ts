import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberAreaComponent } from './member-area.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MemberAreaComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'deposit',
        loadChildren: () => import('./deposit/deposit.module').then((m) => m.DepositModule),
      },
      {
        path: 'plans',
        loadChildren: () => import('./plans/plans.module').then((m) => m.PlansModule),
      },
      {
        path: 'payments',
        loadChildren: () => import('./payments/payments.module').then((m) => m.PaymentsModule),
      },
      {
        path: 'transactions',
        loadChildren: () => import('./transactions/transactions.module').then((m) => m.TransactionsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberAreaRoutingModule { }
