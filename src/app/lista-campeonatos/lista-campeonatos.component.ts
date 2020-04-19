import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
import { Campeonato } from './../campeonato';


@Component({
  selector: 'app-lista-campeonatos',
  templateUrl: './lista-campeonatos.component.html',
  styleUrls: ['./lista-campeonatos.component.css']
})
export class ListaCampeonatosComponent implements OnInit {

  //@Output() public actualizarPadre = new EventEmitter();
  //@ViewChild('campeonatoModal') modal: ElementRef;
  campeonatos: Campeonato[];
  campeonatoEditado: Campeonato = {
    id: '',
    nombre: '',
    direccion: '',
    fechaInicio: ''
  }
  
  constructor(private conexion: ConexionService) {
    //console.log("CREO EL LISTA CAMPEONATOS");
    conexion.listaCAmpeonatos().subscribe(item => {
      this.campeonatos = item;
      //console.log("Cargo Campeonatos en Campeonatos ***",this.campeonatos);
    });
    
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

  

}
