import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
import { Noticia } from './../noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  private idCampeonato="";
  noticias: Noticia[];

constructor(private conexion: ConexionService) {
  console.log('listará noticias del campeonato: ', sessionStorage.getItem('idCampeonato'));
    this.conexion.listaNoticias(sessionStorage.getItem('idCampeonato')).subscribe(item=>{
      this.noticias= item;
    })

  }

  ngOnInit() {
  }

  eliminarNoticia(noticia) {
    
    this.conexion.eliminarNoticia(sessionStorage.getItem('idCampeonato'), noticia);
  }

}
