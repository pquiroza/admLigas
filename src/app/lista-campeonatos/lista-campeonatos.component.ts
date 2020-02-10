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
  noticias: any;

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

  eliminar(campeonato){
    
    this.conexion.eliminarCampeonato(campeonato);
  }

  editar(campeonato){ 
    //console.log(campeonato);
    
    this.campeonatoEditado = campeonato;
   
   
    console.log('--------------');

    this.conexion.listaNoticias(campeonato).subscribe(item=>{
      this.noticias= item;
      console.log('noticias que trae', this.noticias);
    })
    this.conexion.listaNoticias(campeonato);
    
    console.log('--------------');

    //console.log(this.campeonatoEditado.nombre);
  }

  agregarEditado(){
    this.conexion.editarCampeonato(this.campeonatoEditado);
  }

}
