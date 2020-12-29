import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  @Input() heroe: any = {};


  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService ) {
    this.activatedRoute.params.subscribe( params => {
      console.log(this.heroe);
      this.heroe = this._heroesService.getHeroe( params['id'] );
    });
   }
}
