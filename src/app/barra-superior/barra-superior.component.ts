import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ConexionService } from '../services/conexion.service';
import { Campeonato } from '../campeonato';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {
  
  modalRef: BsModalRef; 
  //@ViewChild('campeonatoModal', {static: false}) public childModal:BsModalRef;

  campeonatos: Campeonato[];
  campeonatoSesion: Campeonato = {
    id: '',
    nombre: '',
    direccion: '',
    fechaInicio: ''
};
  

  constructor(private conexion: ConexionService, private sesion: LoginService, private modalService: BsModalService) { 
    conexion.listaCAmpeonatos().subscribe(item=>{
      this.campeonatos= item;
      this.cargarCampeonatoSesion();
    });
  }

  ngOnInit() {
  }

  openModalWithClass(template: TemplateRef<any>) {  
    this.modalRef = this.modalService.show(  
      template,  
      Object.assign({}, { class: 'gray modal-lg' })  
    );  
  }  

  cargarCampeonatoSesion(){
    var idCampeonato = sessionStorage.getItem('idCampeonato');
    if (idCampeonato===null)
    {
      //por defecto pone en sesion el primer campeonato
      this.campeonatoSesion = this.campeonatos[0];
    }
    else
    {
      this.campeonatos.forEach((item) => {
        if (item.id==idCampeonato){
          this.campeonatoSesion =item;
        }
      });
    }
  }

  actualizarCerrar(){
    console.log('ejecutar actualización del modal ++++');
    this.cargarCampeonatoSesion();
    this.modalRef.hide();
  }

}
