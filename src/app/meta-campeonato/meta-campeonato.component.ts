import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Campeonato } from '../model/campeonato';
import { ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-meta-campeonato',
  templateUrl: './meta-campeonato.component.html',
  styleUrls: ['./meta-campeonato.component.css']
})
export class MetaCampeonatoComponent implements OnInit {

  campeonatos: any[];
  campeonatoSesion: Campeonato = {
    categoria: '',
    idCampeonato: 0,
    nombreCampeonato: '',
    sexo: '0',
    timestamp: 0,
    tipo: '',
    ubicacion: '',
    ubicaciongps: ''
};

  formularioCampeonato = new FormGroup({
    categoriaC : new FormControl('', Validators.required),
    idC : new FormControl(0, Validators.required),
    nombreC : new FormControl('', Validators.required),
    sexoC : new FormControl('', Validators.required),
    fechaC : new FormControl(0, Validators.required),
    tipoC : new FormControl('', Validators.required),
    ubicacionC : new FormControl('', Validators.required)
  });


  constructor(private service: ApiService, private router: Router) { 
    
    //console.log('se crea la página');
  }

  ngOnInit() {
    //console.log('se inicia la página');
    this.getCampeonato();

  }

  

  getCampeonato(){
    this.service.getCampeonatos().subscribe((campeonatos: any) => {
      this.campeonatos=campeonatos;
      console.log('esto TRAE ', campeonatos);
      this.cargarCampeonatoSesion();
    });
  }

  cargarCampeonatoSesion()
  {
    var idCampeonatoSesion = sessionStorage.getItem('idCampeonato');
    if (idCampeonatoSesion!=null)
    {
      this.campeonatos.forEach((item) => {
        if (item.IDCAMPEONATO==idCampeonatoSesion){
          this.campeonatoSesion =item;
        }
      });
    }
  }

  agregarActualizaCampeonato()
  {
    console.log('FORMULARIO ',this.formularioCampeonato.status);
    if (this.campeonatoSesion.idCampeonato==0)
    {
      this.service.addCampeonato(this.campeonatoSesion);
    }
    else
    {
      this.service.updateCampeonato(this.campeonatoSesion);
    }
  }

  eliminaCampeonato()
  {
    this.service.deleteCampeonato(this.campeonatoSesion);
  }


}
