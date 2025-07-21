import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name:string = "John"
  url:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oValREuI8Nk929N0Pad99beR_lD42FXsdQ&s"
  isDisabled:boolean = false
}
