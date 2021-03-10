import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { take } from 'rxjs/operators';
import { ChangepasswordService } from './changepassword.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss'],
})
export class ChangepasswordComponent implements OnInit {
  changePasswordLogin: FormGroup;

  imageLogo = 'gama-academy-logo-horizontal-verde-branco1 1.svg'

  arrowRight = 'seta-acessar.svg'

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private changepasswordService:ChangepasswordService,
  ) { }

  ngOnInit(): void {
    this.changePasswordLogin = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(4)]],
      senha: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    this.validateFields();
    this.requestChange();
  }

  requestChange() {
    const userLogin = {
      usuario: this.changePasswordLogin.value.usuario,
      senha: this.changePasswordLogin.value.senha,
    };

    this.changepasswordService.alterarSenha(userLogin);
  }

  validateFields() {
    if (this.changePasswordLogin.invalid) {
      Object.keys(
        this.changePasswordLogin.controls,
      ).forEach((field) => {
        const loginField = this.changePasswordLogin.get(field);
        loginField?.markAsTouched();
      });
    }
  }

  showError(nameField: string) {
    if (!this.changePasswordLogin.get(nameField)) {
      return false;
    }

    return this.changePasswordLogin.get(nameField)?.invalid
    && this.changePasswordLogin.get(nameField)?.touched;
  }

  loginSuccess() {
    this.router.navigate(['dashboard']);
  }

  loginError() {
    this.router.navigate(['error']);
    throwError('Ocorreu um erro durante o login, por favor tente novamente');
  }
}
