import { Injectable } from '@angular/core';
import { Usuario } from './../usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private estaLogueado;
  private campeonatoSeleccionado;
  public usuarioLogueado: Usuario = {
    usuario: '',
    campeonato: ''
  };

  constructor() {

    this.usuarioLogueado.usuario='DantheMan';
    //id de campeonato mock a loguear
    this.usuarioLogueado.campeonato='iSJYablaBBokym7pPUlZ';
  }


  //funciones de sesión
  setUsuarioLogueado(user: string) {
    this.estaLogueado = true;
    this.usuarioLogueado.usuario = user;
    localStorage.setItem('usuarioActual', JSON.stringify(user));

  }

  getUsuarioLogueado() {
    return JSON.parse(localStorage.getItem('usuarioActual'));
  }

  //funciones de sesión
  setCampeonatoLogueado(campeonato: string) {
    this.campeonatoSeleccionado = true;
    this.usuarioLogueado.campeonato = campeonato;
    localStorage.setItem('campeonatoActual', JSON.stringify(campeonato));

  }

  getCampeonatoLogueado() {
    return JSON.parse(localStorage.getItem('campeonatoActual'));
  }


}
