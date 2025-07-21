import { Component } from '@angular/core';
import { MovieList } from './movie-list/movie-list';

@Component({
  selector: 'app-movie',
  imports: [MovieList],
  templateUrl: './movie.html',
  styleUrl: './movie.css'
})
export class Movie {

}
