import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

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
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
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
}
