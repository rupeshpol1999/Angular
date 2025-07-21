import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('memeGenerator');
  toptext:string = '';
  bottomtext:string = '';
  text1:string = '';
  text2:string = '';
  generatememe(){
    this.toptext = this.text1;
    this.bottomtext =this.text2;
  }
}
