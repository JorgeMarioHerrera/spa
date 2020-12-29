import { Heroe } from './../../services/heroes.service';
import { Component, OnInit, Input, ɵConsole, Output, EventEmitter } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';
import { log } from 'util';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router: Router ) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }
  verHeroe() {
  // console.log(this.index);
  this.router.navigate(['/heroe', this.index]);
  // this.heroeSeleccionado.emit( this.index );
  }
}
