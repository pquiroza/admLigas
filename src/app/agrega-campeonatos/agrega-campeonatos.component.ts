import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
import { Campeonato } from './../campeonato';

@Component({
  selector: 'app-agrega-campeonatos',
  templateUrl: './agrega-campeonatos.component.html',
  styleUrls: ['./agrega-campeonatos.component.css']
})
export class AgregaCampeonatosComponent implements OnInit {

  campeonato: any = {
    nombre: '',
    direccion: '',
    fechaInicio: ''
}
  constructor(private conexion: ConexionService) { 

    console.log("CREA EL AGREGA CAMPEONATOS");
  }

  ngOnInit() {
  }

  agregar(){
    this.conexion.agregarCampeonato(this.campeonato);
    this.limpiarVariables();
  }

  limpiarVariables(){
    this.campeonato.nombre= '';
    this.campeonato.direccion= '';
    this.campeonato.fechaInicio= '';
  }
}
