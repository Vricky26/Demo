import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }
  validate(value,key) {
    let userList = JSON.parse(localStorage.getItem("userData"));
    console.log("INSIDE SERVICE");
    console.log(value,key);
    for (let user of userList) {
      let name = user.userName
      if (value === name) {
        return false;
      }
    }
    return true;
  }
}
