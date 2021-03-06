import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitButtonFieldComponent } from './components/submit-button-field/submitButton-field.component';
import { InputTextFieldComponent } from './components/input-text-field/inputText-field.component';

@NgModule({
  declarations: [
    SubmitButtonFieldComponent,
    InputTextFieldComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SubmitButtonFieldComponent,
    InputTextFieldComponent,
  ],
})
export class SharedModule { }
