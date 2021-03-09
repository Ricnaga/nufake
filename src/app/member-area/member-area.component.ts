import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, NgForm, Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { take } from 'rxjs/operators';
import { MemberAreaService } from './member-area.service';

@Component({
  selector: 'app-member-area',
  templateUrl: './member-area.component.html',
  styleUrls: ['./member-area.component.scss'],
})
export class MemberAreaComponent implements OnInit {
  loginForm: FormGroup;

  imageLogo = 'gama-academy-logo-horizontal-verde-branco1 1.svg'

  arrowRight = 'seta-acessar.svg'

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private memberAreaService: MemberAreaService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(4)]],
      senha: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    this.validateFields();
    this.login();
  }

  login() {
    const userLogin = {
      senha: this.loginForm.value.senha,
      usuario: this.loginForm.value.usuario,
    };

    this.memberAreaService.login(userLogin)
      .pipe(
        take(1),
      ).subscribe(
        (response) => this.loginSuccess(),
        (error) => this.loginError(error),
      );
  }

  validateFields() {
    if (this.loginForm.invalid) {
      Object.keys(
        this.loginForm.controls,
      ).forEach((field) => {
        const loginField = this.loginForm.get(field);
        loginField?.markAsTouched();
      });
    }
  }

  showError(nameField: string) {
    if (!this.loginForm.get(nameField)) {
      return false;
    }

    return this.loginForm.get(nameField)?.invalid && this.loginForm.get(nameField)?.touched;
  }

  loginSuccess() {
    this.router.navigate(['dashboard']);
  }

  loginError(error: string) {
    this.router.navigate(['error']);
    throwError('Ocorreu um erro durante o login, por favor tente novamente');
  }
}
