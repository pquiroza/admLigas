import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
import { LoginService } from '../services/login.service';
import { Noticia } from './../noticia';
import { Campeonato } from './../campeonato';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias: Noticia[];

  //constructor(private conexion: ConexionService, private campeonato: Campeonato) {
constructor(private conexion: ConexionService, private sesion: LoginService) {
    //console.log('--------------');
    //console.log('datos de sesion: ', sesion.usuarioLogueado);

    this.conexion.listaNoticias(sesion.usuarioLogueado.campeonato).subscribe(item=>{
      this.noticias= item;
      //console.log('noticias que trae', this.noticias);
    })
    //this.conexion.listaNoticias(campeonato);

    //console.log('--------------');

  }

  ngOnInit() {
  }

  eliminarNoticia(noticia) {
    
    this.conexion.eliminarNoticia(this.sesion.usuarioLogueado.campeonato, noticia);
  }

}
