import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,NgSwitch,NgSwitchDefault,NgSwitchCase],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
role:string = "Student";
 num:number =0;
 iseven:boolean = false;
 check:boolean = false;
 evenodd(){
  if(this.num % 2 == 0){
     this.iseven = true;
  }
  else
    this.iseven = false;
  this.check = true;
 }
 
}
