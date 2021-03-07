import {
  Component, EventEmitter, Input, OnInit, Output,
} from '@angular/core';

@Component({
  selector: 'input-text-field',
  template: `<Input [type]="customType" [placeholder]='customPlaceHolder'
  [(ngModel)]="inputValue" [name]="inputName" ngDefaultControl
  (ngModelChange)="inputValueChange.emit(inputValue)"/>`,
  styleUrls: ['./inputText-field.component.scss'],
})
export class InputTextFieldComponent implements OnInit {
  @Input() customPlaceHolder:string;

  @Input() customType:string;

  @Input() inputValue:string;

  @Input() inputName:string;

  @Output() inputValueChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
