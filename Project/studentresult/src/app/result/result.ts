import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-result',
  imports: [FormsModule],
  templateUrl: './result.html',
  styleUrl: './result.css'
})
export class Result {
  name:string ='';
  html:number = 0;
  css:number = 0;
  typescript:number = 0;
  javascript:number = 0;

  total:number = this.html + this.css + this.typescript + this.javascript;
    check:boolean = false;
    result:boolean = false;
    percentage:number = 0;

    Check_result(){
      const total = this.html + this.css + this.typescript + this.javascript;
      this.percentage = ((total/400)*100);
          if(this.html>=35 && this.css>=35 && this.javascript>=35 && this.typescript>=35)
            {
              this.result = true;  
            }
          else{
            this.result=false;
          }
          this.check=true;
         
    }
}
