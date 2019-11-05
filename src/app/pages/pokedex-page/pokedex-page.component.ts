import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon';
import { PokedexService } from 'src/app/shared/pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss']
})
export class PokedexPageComponent implements OnInit {
  arrayPokemon: Pokemon[];
  pokemonClick: Pokemon;

  constructor(private pokemon: PokedexService) { }

  ngOnInit() {
    this.arrayPokemon = this.pokemon.getPokemon();
  }
  pokemonDetail($event) {
    this.pokemonClick = $event;
  }
}
