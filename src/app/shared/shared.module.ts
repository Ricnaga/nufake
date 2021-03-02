import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonFieldComponent } from './components/button-field/button-field.component';
import { InputFieldComponent } from './components/input-field/input-field.component';

@NgModule({
  declarations: [
    ButtonFieldComponent,
    InputFieldComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonFieldComponent,
    InputFieldComponent,
  ],
})
export class SharedModule { }
