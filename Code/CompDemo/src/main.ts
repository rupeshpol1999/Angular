import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Movie } from './app/movie/movie';
import { MovieList } from './app/movie/movie-list/movie-list';
import { BollyMovie } from './app/movie/movie-list/bolly-movie/bolly-movie';
import { HollyMovie } from './app/movie/movie-list/holly-movie/holly-movie';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
