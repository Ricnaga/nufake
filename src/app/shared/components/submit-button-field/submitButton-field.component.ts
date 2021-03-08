import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'submit-button-field',
  template: `<button class="btnForm" type="submit" class="formButton">
  <p>{{customText}}</p>
  <img src="assets/seta-acessar.svg" alt="Acessar">
</button>`,
  styleUrls: ['./submitButton-field.component.scss'],
})
export class SubmitButtonFieldComponent implements OnInit {
  @Input() customText: string;

  constructor() { }

  ngOnInit(): void {
  }
}
