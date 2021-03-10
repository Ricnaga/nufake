import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { take } from 'rxjs/operators';
import { Login } from 'src/app/shared/interfaces/login/Login.interface';
import { LocalStorageService } from 'src/app/shared/services/localStorage/localStorage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChangepasswordService {
  API_URL = environment.API_URL

  constructor(
    private localStorageService:LocalStorageService,
    private http: HttpClient,
    private router: Router,
  ) { }

  alterarSenha({ usuario, senha }: Login) {
    if (this.localStorageService.getTempPassword() === 'stringSenhaTemp') {
      return of({});
    }
    const changePassword = {
      usuario,
      senha,
    };

    const httpParams = new HttpParams({
      fromString: `senhaTemporaria=${this.localStorageService.getTempPassword()}`,
    });

    return this.http.post(`${this.API_URL}/altera-senha`, changePassword, { params: httpParams })
      .pipe(
        take(1),
      )
      .subscribe(
        (response) => this.recoverySuccess(),
        (error) => this.recoveryError(),
      );
  }

  recoverySuccess() {
    this.router.navigate(['login']);
  }

  recoveryError() {
    this.router.navigate(['error']);
    throwError('Ocorreu um erro durante a recuperação de senha, por favor tente novamente');
  }
}
