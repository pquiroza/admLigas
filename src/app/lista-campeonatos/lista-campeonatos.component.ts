import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
import { Campeonato } from './../campeonato';

@Component({
  selector: 'app-lista-campeonatos',
  templateUrl: './lista-campeonatos.component.html',
  styleUrls: ['./lista-campeonatos.component.css']
})
export class ListaCampeonatosComponent implements OnInit {

  campeonatos: any;

  //campeonatoEditado: any;

  campeonatoEditado: any = {
    id: 0,
    nombre: '',
    direccion: '',
    fechaInicio: ''
}

  constructor(private conexion: ConexionService) {
    conexion.listaCAmpeonatos().subscribe(item=>{
      this.campeonatos= item;
      console.log(this.campeonatos);
    })
   }


  ngOnInit() {
  }

  eliminar(item){
    
    this.conexion.eliminarCampeonato(item);
  }

  editar(item){ 
    console.log(item);
    
    this.campeonatoEditado = item;
    console.log(this.campeonatoEditado.nombre);
  }

  agregarEditado(){
    this.conexion.editarCampeonato(this.campeonatoEditado);
  }

}
