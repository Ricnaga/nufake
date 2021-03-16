import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { MemberAreaRoutingModule } from './member-area-routing.module';
import { MemberAreaComponent } from './member-area.component';
import { PaymentsComponent } from './payments/payments.component';
import { PlansComponent } from './plans/plans.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    MemberAreaComponent,
    DashboardComponent,
    DepositComponent,
    PlansComponent,
    PaymentsComponent,
    TransactionsComponent,
  ],
  imports: [
    CommonModule,
    MemberAreaRoutingModule,
    SharedModule,
  ],
})
export class MemberAreaModule { }
