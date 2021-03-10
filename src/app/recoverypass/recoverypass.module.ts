import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { RecoverypassRoutingModule } from './recoverypass-routing.module';

@NgModule({
  declarations: [ChangepasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    RecoverypassRoutingModule,
    ReactiveFormsModule,
  ],
})
export class RecoverypassModule { }
