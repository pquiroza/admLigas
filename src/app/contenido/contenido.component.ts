import { Component, OnInit } from '@angular/core';
import { Campeonato } from '../campeonato';
import { CAMPEONATOS } from '../campeonatos';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  campeonatos= CAMPEONATOS;

  constructor() { }

  ngOnInit() {
  }

}
