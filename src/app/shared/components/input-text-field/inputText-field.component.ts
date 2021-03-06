import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-text-field',
  templateUrl: './inputText-field.component.html',
  styleUrls: ['./inputText-field.component.scss'],
})
export class InputTextFieldComponent implements OnInit {
  @Input() customPlaceHolder:string;

  constructor() { }

  ngOnInit(): void {
  }
}
