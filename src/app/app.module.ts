import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { ReactiveFormsModule } from "@angular/forms";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import * as firebase from 'firebase';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { InicioComponent } from './inicio/inicio.component';


import { ListaCampeonatosComponent } from './lista-campeonatos/lista-campeonatos.component';
import { AgregaCampeonatosComponent } from './agrega-campeonatos/agrega-campeonatos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { LoginComponent } from './login/login.component';


import { ConexionService } from './services/conexion.service';
import { NoticiaComponent } from './noticia/noticia.component';
import { FixtureComponent } from './fixture/fixture.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { EquiposComponent } from './equipos/equipos.component';
import { TablaPosicionComponent } from './tabla-posicion/tabla-posicion.component';
import { CampeonatosComponent } from './campeonatos/campeonatos.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MetaCampeonatoComponent } from './meta-campeonato/meta-campeonato.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

firebase.initializeApp(environment.firebase);



@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    PiePaginaComponent,
    InicioComponent,
    ListaCampeonatosComponent,
    AgregaCampeonatosComponent,
    NoticiasComponent,
    LoginComponent,
    NoticiaComponent,
    FixtureComponent,
    AdministradorComponent,
    EquiposComponent,
    TablaPosicionComponent,
    CampeonatosComponent,
    MetaCampeonatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    HttpClientModule
  ],
  providers: [ConexionService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
