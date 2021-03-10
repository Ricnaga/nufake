import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../services/localStorage/localStorage.service';

@Injectable({
  providedIn: 'root',
})
export class MembersGuard implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private router:Router,
  ) {}

  canActivate(): boolean {
    const isMember = this.localStorageService.isMember();

    if (isMember) {
      return true;
    }

    this.router.navigate(['home']);
    return false;
  }
}
