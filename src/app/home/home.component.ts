import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { throwError } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NufakeHomeService } from './nufake-home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cpf: string;

  user: string;

  name: string;

  password: string;

  confirmPassword: string;

  constructor(
    private nufakeHomeService: NufakeHomeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.validateFields(form);

    const newUser = {
      cpf: Number(this.cpf),
      login: this.user,
      nome: this.name,
      senha: this.password,
    };

    this.nufakeHomeService.criarConta(newUser)
      .pipe(
        take(1),
      ).subscribe(
        (response) => this.onResponseSuccess(),
        (error) => this.onResponseError(),
      );
  }

  validateFields(form: NgForm) {
    if (!form.valid) {
      form.controls.cpf.markAsTouched();
      form.controls.user.markAsTouched();
      form.controls.name.markAsTouched();
      form.controls.password.markAsTouched();
      form.controls.confirmPassword.markAsTouched();
    }
  }

  showError(nameField: string, form: NgForm) {
    if (!form.controls[nameField]) {
      return false;
    }

    return form.controls[nameField].invalid && form.controls[nameField].touched;
  }

  onResponseSuccess() {
    this.router.navigate(['login']);
  }

  onResponseError() {
    alert('Ocorreu um erro ao se cadastrar, por favor tente novamente');
    throwError('Ocorreu um erro durante o cadastro, por favor tente novamente');
  }
}
