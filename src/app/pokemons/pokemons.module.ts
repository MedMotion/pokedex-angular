import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule
} from '@angular/material';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {RouterModule} from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';


@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent, PokedexComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    RouterModule,
    MatListModule,
    MatGridListModule,
    MatChipsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
      MatSidenavModule
  ]
})
export class PokemonsModule { }
