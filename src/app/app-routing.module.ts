import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonDetailComponent} from './pokemons/pokemon-detail/pokemon-detail.component';
import {PokemonListComponent} from './pokemons/pokemon-list/pokemon-list.component';
import {PokedexComponent} from './pokemons/pokedex/pokedex.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'home', component: PokedexComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
