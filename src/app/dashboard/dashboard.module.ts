import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    RouterModule,
  ],
})
export class DashboardModule { }
