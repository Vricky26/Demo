import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../../validation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  isSubmit=false;
  isUpdate=false;

  constructor(private validate: ValidationService, private route: Router, 
    private activatedRoute: ActivatedRoute) { }

  userForm = new FormGroup({
    userName: new FormControl(null,Validators.required),
    email: new FormControl(null,Validators.required),
    salary: new FormControl(null,Validators.required),
    department: new FormControl(null,Validators.required),
    description: new FormControl()
  });

  userId: any;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params;
    });
    if (!(this.userId.id==-1)) {
      this.isUpdate=true;
      this.userForm.patchValue(JSON.parse(localStorage.getItem("userData"))[this.userId.id]);
    }
  }
  userUpdateData:any

  saveUser(values, valid) {
    this.isSubmit =true;
    if (valid) {
      if(!(JSON.parse(localStorage.getItem("userData"))[this.userId.id]==undefined)){
        this.userUpdateData = JSON.parse(localStorage.getItem("userData"));
        this.userUpdateData[this.userId.id]=values
        localStorage.setItem("userData",JSON.stringify(this.userUpdateData));
      }else{
      if (!(this.validate.validate(values["userName"], "userName"))) {
        alert("user with the given Name already exist");
        this.route.navigate(["add"]);
      } else {
        this.userUpdateData = JSON.parse(localStorage.getItem("userData"));
        this.userUpdateData.push(values);
        localStorage.setItem("userData", JSON.stringify(this.userUpdateData));
      }
    }
      this.route.navigate(["list"]);
    }
  }
}
