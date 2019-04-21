import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Pokemon} from '../models/pokemon.model';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../environments/environment';
import {PagedData} from '../models/page-data.model';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    pokeUrl = `${environment.apiUrl}/pokemons`;

    getPokemons(offset = 0) {
        const param = new HttpParams().set('offset', `${offset}`).set('limit', '20');
        return this.http.get<PagedData<Pokemon>>(this.pokeUrl, {params: param});
    }

    getPokemon(id) {
        return this.http.get<Pokemon>(this.pokeUrl + '/' + id);
    }
    constructor(private http: HttpClient) {
    }
}



