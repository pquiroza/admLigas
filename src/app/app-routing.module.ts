import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContenidoPruebaComponent } from './contenido-prueba/contenido-prueba.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { LoginComponent } from './login/login.component';
import { NoticiaComponent } from './noticia/noticia.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent,  pathMatch: 'full'},
  {path: 'noticias', component: NoticiasComponent },
  {path: 'noticia', component: NoticiaComponent },
  {path: 'contenido', component: ContenidoComponent },
  {path: 'contenido-prueba', component: ContenidoPruebaComponent },
  {path: '', component: InicioComponent, pathMatch: 'full' },
  {path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
