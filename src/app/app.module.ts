import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { CreatePokemonPageComponent } from './pages/create-pokemon-page/create-pokemon-page.component';
import { PokemonListComponent } from './component/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './component/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexPageComponent,
    CreatePokemonPageComponent,
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
