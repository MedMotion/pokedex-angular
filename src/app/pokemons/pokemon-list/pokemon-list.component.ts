import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../../models/pokemon.model';
import {PagedData} from '../../models/page-data.model';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
    pokemons: PagedData<Pokemon> = {data: [], limit: 20, offset: 0};

    @Output() newPok = new EventEmitter<Pokemon>();  // <!-- Voici l'output

    // clickLa(id) {
    //     this.newPok.emit(id);
    // }

    constructor(private pokemonService: PokemonService) {
    }

    ngOnInit() {
        this.getPokemons();
    }

    getPokemons() {
        this.pokemonService.getPokemons(this.pokemons.offset).subscribe(poke => {
            this.pokemons.data = this.pokemons.data.concat(poke.data);
            this.pokemons.offset = poke.offset + 20;
        });
    }

    //   getPokemons() {
    //       this.pokemonService.getPokemons().subscribe(
    //           data => { this.pokemons = data.json();
    //               this.pokemons = Array.of(this.pokemons);
    //           },
    //           err => console.error(err),
    //           () => console.log('getBooks completed')
    //       );
    //   }

    onSroll() {
        this.getPokemons();
    }
}
