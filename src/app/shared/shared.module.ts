import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubmitButtonFieldComponent } from './components/submit-button-field/submitButton-field.component';
import { DashboardMenuComponent } from './components/dashboard-menu/dashboard-menu.component';

@NgModule({
  declarations: [
    SubmitButtonFieldComponent,
    DashboardMenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SubmitButtonFieldComponent,
    DashboardMenuComponent,
  ],
})
export class SharedModule { }
