import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Highlight } from './highlight';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgClass,NgStyle,Highlight],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isDark:boolean = false
  fun(){
    this.isDark =true
  }
}
