import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){
    localStorage.setItem("userData", JSON.stringify([
      {
        "userName": "vikram",
        "email": "vik@gmail.com",
        "department": "Java",
        "salary": "12000",
        "description": "Hi Vikram"
      }, {
        "userName": "chary",
        "email": "chary@gmail.com",
        "department": "Java",
        "salary": "12000",
        "description": "Hi Chary"
      }]));
  }
}
