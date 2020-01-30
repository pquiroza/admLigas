import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

firebase.initializeApp(environment.firebase);

const rutas: Routes = [
  {path: 'contenido', component: ContenidoComponent },
  {path: 'contenido-prueba', component: ContenidoPruebaComponent },
  {path: '', component: InicioComponent, pathMatch: 'full' },
  {path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    ContenidoComponent,
    PiePaginaComponent,
    ContenidoPruebaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
