import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ConexionService } from '../services/conexion.service';

import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Campeonato } from '../model/campeonato';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {
  
  
  campeonatos: any[];

  campeonatoSesion: Campeonato = {
    categoria: '',
    idCampeonato: 0,
    nombreCampeonato: '',
    sexo: '',
    timestamp: 0,
    tipo: '',
    ubicacion: '',
    ubicaciongps: ''
};
  

  constructor(private conexion: ConexionService, private router: Router, private service: ApiService) { 
    
    /*
    conexion.listaCAmpeonatos().subscribe(item=>{
      this.campeonatos= item;
      this.cargarCampeonatoSesion();
    });
    */
  }

  ngOnInit() {
    this.getCampeonatos();
  }

  getCampeonatos(){
    this.service.obtenerCampeonatos().subscribe((campeonatosServicio: any) => {
      console.log('esto TRAE ', campeonatosServicio);
      this.campeonatos= campeonatosServicio;
      
      campeonatosServicio.forEach((item) => {
       console.log('el valor: ', item.IDCAMPEONATO);
      });


      //lo puse dentro pq debe cargar en sesión una vez que ha cargado los campeonatos
      this.cargarCampeonatoSesion();
    });
    
  }

  cargarCampeonatoSesion(){
    var idCampeonato = sessionStorage.getItem('idCampeonato');
    console.log('idCampeonato ', idCampeonato);
    if (idCampeonato===null)
    {
      //por defecto pone en sesion el primer campeonato
      this.campeonatoSesion = this.campeonatos[0];
    }
    else
    {
      this.campeonatos.forEach((item) => {
        if (item.IDCAMPEONATO==idCampeonato){
          this.campeonatoSesion =item;
        }
      });
    }
  }

  changeCampeonatoSesion(e)
  {
    sessionStorage.setItem('idCampeonato', e.target.value);
    this.gotoCampeonato(e.target.value);
  }

  gotoCampeonato(campeonatoId: any) {

    console.log('campeonato ', campeonatoId);
    //this.router.navigate(['/meta']);
    this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => this.router.navigate(['/meta']));
  }

}
