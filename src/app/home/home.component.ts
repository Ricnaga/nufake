import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cpf:string;

  user:string;

  name:string;

  password:string;

  confirmPassword:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    console.log(this.cpf);
    console.log(this.confirmPassword);
    console.log(this.name);
    console.log(this.password);
    console.log(this.user);
    console.log(form);
  }
}
