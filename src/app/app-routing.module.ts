import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { CreatePokemonPageComponent } from './pages/create-pokemon-page/create-pokemon-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Pokedex'},
  { path: 'Pokedex', component: PokedexPageComponent},
  { path: 'create', component: CreatePokemonPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
