import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubmitButtonFieldComponent } from './components/submit-button-field/submitButton-field.component';

@NgModule({
  declarations: [
    SubmitButtonFieldComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SubmitButtonFieldComponent,
  ],
})
export class SharedModule { }
