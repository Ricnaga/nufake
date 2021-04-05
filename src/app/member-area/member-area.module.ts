import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberAreaRoutingModule } from './member-area-routing.module';
import { MemberAreaComponent } from './member-area.component';

@NgModule({
  declarations: [
    MemberAreaComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MemberAreaRoutingModule,
    SharedModule,
  ],
})
export class MemberAreaModule { }
