import { Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/usuario/Usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  usuario: Usuario

  token: string;

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

  isMember(): boolean {
    if (this.getUser() && this.getToken()) {
      return true;
    }

    return false;
  }
}
