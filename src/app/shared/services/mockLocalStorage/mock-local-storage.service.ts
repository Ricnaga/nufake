import { Injectable } from '@angular/core';
import { Sessao } from '../../interfaces/Sessao.interface';
import { Usuario } from '../../interfaces/usuario/Usuario.interface';
import { UsuarioDTO } from '../../interfaces/usuario/UsuarioDTO.interface';

@Injectable({
  providedIn: 'root',
})
export class MockLocalStorageService {
  mockUserDTO: UsuarioDTO

  mockUser: Usuario

  token: string

  mockSession:Sessao

  constructor() { }

  setMockUserDTO(userDTO: UsuarioDTO) {
    this.mockUserDTO = userDTO;
    localStorage.setItem('mockUserDTO', JSON.stringify(userDTO));
  }

  getMockUserDTO() {
    if (this.mockUserDTO) {
      return this.mockUserDTO;
    }

    const mockedUser = localStorage.getItem('mockUser');

    if (mockedUser) {
      this.mockUserDTO = JSON.parse(mockedUser);
      return this.mockUserDTO;
    }

    return null;
  }

  setMockSession(session: Sessao) {
    this.mockSession = session;
    localStorage.setItem('mockSession', JSON.stringify(session));
  }

  getMockSession() {
    if (this.mockSession) {
      return this.mockSession;
    }

    const mockedSession = localStorage.getItem('mockSession');

    if (mockedSession) {
      this.mockSession = JSON.parse(mockedSession);
      return this.mockSession;
    }

    return null;
  }
}
