import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { take } from 'rxjs/operators';
import { MemberAreaService } from '../member-area/member-area.service';

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
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.recoveryForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    this.validateFields();
    this.login();
  }

  login() {
    const recoveredUser = {
      email: this.recoveryForm.value.email,
      usuario: this.recoveryForm.value.usuario,
    };

    // this.memberAreaService.login(userLogin)
    //   .pipe(
    //     take(1),
    //   ).subscribe(
    //     (response) => this.loginSuccess(),
    //     (error) => this.loginError(error),
    //   );
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

  loginSuccess() {
    this.router.navigate(['login']);
  }

  loginError(error: string) {
    this.router.navigate(['error']);
    throwError('Ocorreu um erro durante a recuperaçãoe senha, por favor tente novamente');
  }
}
