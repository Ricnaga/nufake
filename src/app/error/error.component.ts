import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  imageLogo = 'gama-academy-logo-horizontal-verde-branco1 1.svg';

  constructor() { }

  ngOnInit(): void {
  }
}
