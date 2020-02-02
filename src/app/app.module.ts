import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { ContenidoComponent } from './contenido/contenido.component';
import * as firebase from 'firebase';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { ContenidoPruebaComponent } from './contenido-prueba/contenido-prueba.component';
import { InicioComponent } from './inicio/inicio.component';

import { ConexionService } from './services/conexion.service';
import { ListaCampeonatosComponent } from './lista-campeonatos/lista-campeonatos.component';
import { AgregaCampeonatosComponent } from './agrega-campeonatos/agrega-campeonatos.component';

firebase.initializeApp(environment.firebase);



@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    ContenidoComponent,
    PiePaginaComponent,
    ContenidoPruebaComponent,
    InicioComponent,
    ListaCampeonatosComponent,
    AgregaCampeonatosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
