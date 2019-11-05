import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemons: Pokemon[];
  @Output() pokemonSelected: EventEmitter<any> = new EventEmitter();

  pokemonClick(pokemon) {
    this.pokemonSelected.emit(pokemon);
  }

  constructor() { }

  ngOnInit() {
  }

}
