import { Component } from '@angular/core';
import { BollyMovie } from './bolly-movie/bolly-movie';
import { HollyMovie } from './holly-movie/holly-movie';

@Component({
  selector: 'app-movie-list',
  imports: [BollyMovie,HollyMovie],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieList {

}
