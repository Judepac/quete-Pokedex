import { Pokemon } from './../../shared/pokemon';
import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/shared/pokedex.service';

@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.scss']
})
export class CreatePokemonPageComponent implements OnInit {

  newPokemon = new Pokemon();

  constructor(private pokedex: PokedexService) {}

  ngOnInit() {}

  addNewPokemon() {
    return this.pokedex.addPokemon(this.newPokemon);

  }
}
