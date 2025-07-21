import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('twowaydatabind');
      num1:number = 0;
      num2:number = 0;
      value:number = 0;
      add(){
           this.value = this.num1 + this.num2
           this.num1 =this.num2 = 0;
                }
}
