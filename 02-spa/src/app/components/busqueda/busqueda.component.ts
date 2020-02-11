import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { log } from 'util';
import { HeroesComponent } from './../heroes/heroes.component';



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  // tslint:disable-next-line: no-trailing-whitespace
  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      console.log(this.heroes);
    });
  }

}
