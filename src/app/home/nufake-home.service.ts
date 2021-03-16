import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioDTO } from '../shared/interfaces/usuario/UsuarioDTO.interface';
import { MockLocalStorageService } from '../shared/services/mockLocalStorage/mock-local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class NufakeHomeService {
  API_URL = environment.API_URL

  constructor(
    private http: HttpClient,
    private mockLocalStorage:MockLocalStorageService,
  ) { }

  mockCriarConta(user: UsuarioDTO) {
    this.mockLocalStorage.setMockUserDTO(user);
    return of({});
  }

  criarConta({
    cpf,
    login,
    nome,
    senha,
  }: UsuarioDTO) {
    return this.http.post(`${this.API_URL}/usuarios`, {
      cpf, login, nome, senha,
    });
  }
}
