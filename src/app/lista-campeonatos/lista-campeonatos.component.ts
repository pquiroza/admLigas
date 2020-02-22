import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
import { Campeonato } from './../campeonato';

@Component({
  selector: 'app-lista-campeonatos',
  templateUrl: './lista-campeonatos.component.html',
  styleUrls: ['./lista-campeonatos.component.css']
})
export class ListaCampeonatosComponent implements OnInit {

  //campeonatos: any;
  campeonatos: Campeonato[];
  //noticias: any;

  //campeonatoEditado: any;
//campeonatoEditado: any = {
  campeonatoEditado: Campeonato = {
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

  eliminar(campeonato){

    this.conexion.eliminarCampeonato(campeonato);
  }

  editar(campeonato){
    //console.log(campeonato);

    this.campeonatoEditado = campeonato;


    //console.log(this.campeonatoEditado.nombre);
  }

  agregarEditado(){
    this.conexion.editarCampeonato(this.campeonatoEditado);
  }

}
