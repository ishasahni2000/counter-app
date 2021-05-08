import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string = 'Counter App';
  count :number = 0 ;

  handleIncrease(){
    if(this.count<10)
    this.count = this.count +1;         //use this key word to tell the complier that we are using count variable of this class
  
  }
  handleDecrease(){
    if(this.count>0)
    this.count = this.count -1;         //use this key word to tell the complier that we are using count variable of this class
   }

   handleReset(){
    this.count = 0;         //use this key word to tell the complier that we are using count variable of this class
   }
}
