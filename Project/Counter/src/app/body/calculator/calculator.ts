import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
  standalone:true
})
export class Calculator {
    num1: number = 0;
    num2: number = 0;
    result:number|string = '';

  calculate(operator:string):void{
            if (operator === '+') {
            this.result = this.num1 + this.num2;
          } else if (operator === '-') {
            this.result = this.num1 - this.num2;
          } else if (operator === '*') {
            this.result = this.num1 * this.num2;
          } else if (operator === '/') {
            this.result = this.num2 !== 0 ? (this.num1 / this.num2).toFixed(2) : 'Cannot divide by 0';
          } else {
            this.result = 'Invalid operator';
          }
      }
      clear(){
        this.num1 = 0;
        this.num2 = 0;
        this.result = "";
      }
  }

