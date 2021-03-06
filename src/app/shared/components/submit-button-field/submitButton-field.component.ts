import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'submit-button-field',
  templateUrl: './submitButton-field.component.html',
  styleUrls: ['./submitButton-field.component.scss'],
})
export class SubmitButtonFieldComponent implements OnInit {
  @Input() customText:string;

  constructor() { }

  ngOnInit(): void {
  }
}
