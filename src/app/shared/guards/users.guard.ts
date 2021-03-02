import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from '../services/tokens/token.service';

@Injectable({
  providedIn: 'root',
})
export class UsersGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private router: Router,
  ) { }

  canActivate(): boolean {
    const isMember = this.tokenService.isMember();

    if (!isMember) {
      return true;
    }

    this.router.navigate(['dashboard']);
    return false;
  }
}
