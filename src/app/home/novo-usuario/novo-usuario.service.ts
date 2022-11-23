import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpCliente: HttpClient) { }
  cadastraNovoUsuario(novoUsuario:NovoUsuario)
  {
    return this.httpCliente.post('http://localhost:3000/user/signup', novoUsuario)
  }

  verificaUsuarioExistente(nomeUsuario: string)
  {
    return this.httpCliente.get(`http://localhost:3000/user/exists/${nomeUsuario}`)
  }
}
