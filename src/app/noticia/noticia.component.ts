import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";
import { ConexionService } from '../services/conexion.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  //variables
  imgSrc: String;
  imagenSeleccionada: any;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    titulo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required)
  })

  //constructor
  constructor(private storage: AngularFireStorage, private conexion: ConexionService, private sesion: LoginService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  //métodos
  vistaPrevia(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.imagenSeleccionada = event.target.files[0];
    }
    else {
      this.imgSrc = '/assets/img/imagenVacia.png';
      this.imagenSeleccionada = null;
      
    }
  }
  

  onSubmit(formValue) {
    
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var rutaArchivo = `${this.imagenSeleccionada.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const referenciaArchivo = this.storage.ref(rutaArchivo);
      this.storage.upload(rutaArchivo, this.imagenSeleccionada).snapshotChanges().pipe(
        finalize(() => {
          referenciaArchivo.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            //aca meter la URL al componente firebase
            this.conexion.agregarNoticia(this.sesion.usuarioLogueado.campeonato,formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
    
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      titulo: '',
      descripcion: '',
      imageUrl: ''
    });
    this.imgSrc = '/assets/img/imagenVacia.png';
    this.isSubmitted = false;
    this.imagenSeleccionada = null;
  }
  
}