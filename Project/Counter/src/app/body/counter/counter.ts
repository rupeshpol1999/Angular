import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  Count:number = 0;
  incr(){this.Count++}
  decr(){this.Count--}
  res(){this.Count=0}
}
