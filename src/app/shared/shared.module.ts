import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubmitButtonFieldComponent } from './components/submit-button-field/submitButton-field.component';
import { InputTextFieldComponent } from './components/input-text-field/inputText-field.component';

@NgModule({
  declarations: [
    SubmitButtonFieldComponent,
    InputTextFieldComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SubmitButtonFieldComponent,
    InputTextFieldComponent,
  ],
})
export class SharedModule { }
