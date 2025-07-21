import { Component } from '@angular/core';
import { Calculator } from './calculator/calculator';
import { Counter } from './counter/counter';
import { Currencyconverter } from './currencyconverter/currencyconverter';

@Component({
  selector: 'app-body',
  imports: [Calculator,Counter,Currencyconverter],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
