import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { take } from 'rxjs/operators';
import { LocalStorageService } from '../shared/services/localStorage/localStorage.service';
import { RecoverypassService } from './recoverypass.service';

@Component({
  selector: 'app-recoverypass',
  templateUrl: './recoverypass.component.html',
  styleUrls: ['./recoverypass.component.scss'],
})
export class RecoverypassComponent implements OnInit {
  recoveryForm: FormGroup;

  imageLogo = 'gama-academy-logo-horizontal-verde-branco1 1.svg'

  arrowRight = 'seta-acessar.svg'

  constructor(
    private recoverypassService:RecoverypassService,
    private localStorageService:LocalStorageService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.recoveryForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.validateFields();
    this.requestNewPassword();
  }

  requestNewPassword() {
    const newPassword = {
      login: this.recoveryForm.value.usuario,
      email: this.recoveryForm.value.email,
    };

    this.recoverypassService.solicitarNovaSenha(newPassword)
      .pipe(
        take(1),
      ).subscribe(
        (response) => this.sendToNewPasswordRequest(response),
        (error) => this.loginError(error),
      );
  }

  validateFields() {
    if (this.recoveryForm.invalid) {
      Object.keys(
        this.recoveryForm.controls,
      ).forEach((field) => {
        const loginField = this.recoveryForm.get(field);
        loginField?.markAsTouched();
      });
    }
  }

  showError(nameField: string) {
    if (!this.recoveryForm.get(nameField)) {
      return false;
    }

    return this.recoveryForm.get(nameField)?.invalid && this.recoveryForm.get(nameField)?.touched;
  }

  sendToNewPasswordRequest(senhaTemporaria: string) {
    this.localStorageService.setTempPassword(senhaTemporaria);
    this.router.navigate(['changepassword']);
  }

  loginError(error: string) {
    this.router.navigate(['error']);
    throwError('Ocorreu um erro durante a recuperação de senha, por favor tente novamente');
  }
}
