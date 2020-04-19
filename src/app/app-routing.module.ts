import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { LoginComponent } from './login/login.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { FixtureComponent } from './fixture/fixture.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { TablaPosicionComponent } from './tabla-posicion/tabla-posicion.component';
import { EquiposComponent } from './equipos/equipos.component';
import { CampeonatosComponent } from './campeonatos/campeonatos.component';
import { MetaCampeonatoComponent } from './meta-campeonato/meta-campeonato.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent,  pathMatch: 'full'},
  {path: 'campeonatos', component: CampeonatosComponent },
  {path: 'noticias', component: NoticiasComponent },
  {path: 'noticia', component: NoticiaComponent },
  {path: 'meta', component: MetaCampeonatoComponent },
  {path: 'fixture', component: FixtureComponent },
  {path: 'administrador', component: AdministradorComponent },
  {path: 'equipos', component: EquiposComponent },
  {path: 'tabla', component: TablaPosicionComponent },
  
  {path: '', component: InicioComponent, pathMatch: 'full' },
  {path: '**', redirectTo: '/', pathMatch: 'full' }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
