import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
import { Campeonato } from './../campeonato';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-lista-campeonatos',
  templateUrl: './lista-campeonatos.component.html',
  styleUrls: ['./lista-campeonatos.component.css']
})
export class ListaCampeonatosComponent implements OnInit {

  campeonatos: Campeonato[];
  campeonatoEditado: Campeonato = {
    id: 0,
    nombre: '',
    direccion: '',
    fechaInicio: ''
  }

  constructor(private conexion: ConexionService, private sesion: LoginService) {
    conexion.listaCAmpeonatos().subscribe(item => {
      this.campeonatos = item;
      console.log(this.campeonatos);
    })
  }

  ngOnInit() {
  }

  eliminar(campeonato) {
    this.conexion.eliminarCampeonato(campeonato);
  }

  editar(campeonato) {
    this.campeonatoEditado = campeonato;
  }

  agregarEditado() {
    this.conexion.editarCampeonato(this.campeonatoEditado);
  }

  seleccionar(campeonato) {
    this.sesion.setCampeonatoLogueado(campeonato);
  }

}
