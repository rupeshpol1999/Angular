import { Component } from '@angular/core';
import { Body } from "../body";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currencyconverter',
  imports: [FormsModule],
  templateUrl: './currencyconverter.html',
  styleUrl: './currencyconverter.css'
})
export class Currencyconverter {
      dolr:number = 0;
      result:number = 0;
      convert(){
        this.result = this.dolr * 85.86 ;
      }


      }      

