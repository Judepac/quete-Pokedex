import { PokemonsMock } from './pokemons-mock';
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

pokemonsArray: Pokemon[];

  constructor() { }

  getPokemon() {
   return this.pokemonsArray = PokemonsMock;
  }

  addPokemon(pokemons: Pokemon): void {
    this.pokemonsArray.push(pokemons);
  }
}
