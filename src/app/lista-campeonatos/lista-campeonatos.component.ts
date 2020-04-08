import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
import { Campeonato } from './../campeonato';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-campeonatos',
  templateUrl: './lista-campeonatos.component.html',
  styleUrls: ['./lista-campeonatos.component.css']
})
export class ListaCampeonatosComponent implements OnInit {

  @Output() public actualizarPadre = new EventEmitter();
  //@ViewChild('campeonatoModal') modal: ElementRef;
  campeonatos: Campeonato[];
  campeonatoEditado: Campeonato = {
    id: '',
    nombre: '',
    direccion: '',
    fechaInicio: ''
  }
  

  constructor(private conexion: ConexionService, private sesion: LoginService, private router: Router) {
    
    conexion.listaCAmpeonatos().subscribe(item => {
      this.campeonatos = item;
      //console.log(this.campeonatos);
    })
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

  seleccionar(campeonato) {
    //this.sesion.setCampeonatoLogueado(campeonato);
    console.log('poniendo en sesion el campeonato: ', campeonato.id);
    sessionStorage.setItem('idCampeonato', campeonato.id);
    console.log('la ruta es ', this.router.url);
    //this.router.navigateByUrl('noticias'); 
    this.actualizarPadre.emit();
   // modal.modal('hide');
  }

}
