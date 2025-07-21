import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 isPrasad:boolean = false;
 isShow:boolean = false;

 change(){
  this.isPrasad = true;
 }
}
