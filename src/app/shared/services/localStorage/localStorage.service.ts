import { Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/usuario/Usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  usuario: Usuario

  token: string;

  senhaTemporaria: string;

  username: string;

  constructor() { }

  setUser(usuario: Usuario) {
    this.usuario = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getUser() {
    if (this.usuario) {
      return this.usuario;
    }

    const user = localStorage.getItem('usuario');

    if (user) {
      this.usuario = JSON.parse(user);
      return this.usuario;
    }

    return null;
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    if (this.token) {
      return this.token;
    }

    const userToken = localStorage.getItem('token');

    if (userToken) {
      this.token = userToken;
      return this.token;
    }

    return null;
  }

  setTempPassword(senhaTemporaria: string) {
    this.senhaTemporaria = senhaTemporaria;
    localStorage.setItem('senhaTemporaria', senhaTemporaria);
  }

  getTempPassword() {
    if (this.senhaTemporaria) {
      return this.senhaTemporaria;
    }

    const userSenhaTemporaria = localStorage.getItem('senhaTemporaria');

    if (userSenhaTemporaria) {
      this.senhaTemporaria = userSenhaTemporaria;
      return this.senhaTemporaria;
    }

    return null;
  }

  isMember(): boolean {
    if (this.getUser() && this.getToken()) {
      return true;
    }

    return false;
  }
}
