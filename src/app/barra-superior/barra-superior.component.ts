import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ConexionService } from '../services/conexion.service';
import { Campeonato } from '../campeonato';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  campeonatos: Campeonato[];
  campeonatoSesion: Campeonato = {
    id: 0,
    nombre: '',
    direccion: '',
    fechaInicio: ''
};
  

  constructor(private conexion: ConexionService, private sesion: LoginService) { 
    conexion.listaCAmpeonatos().subscribe(item=>{
      this.campeonatos= item;
      //por defecto pone en sesion el primer campeonato
      this.campeonatoSesion = this.campeonatos[0];
    });
  }

  ngOnInit() {
    
  }

}
