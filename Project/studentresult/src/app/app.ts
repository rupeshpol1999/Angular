import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Result } from './result/result';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Result],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('studentresult');
}
