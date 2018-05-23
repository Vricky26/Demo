import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userList: any;
  @Input() userDetails :{};
  @Output() updated : EventEmitter<any> =new EventEmitter();
  constructor(private route: Router) { }

  ngOnInit() {
    this.userList = JSON.parse(localStorage.getItem("userData"));
  }
  add() {
    this.updated.emit(JSON.stringify(this.userList)); 
    this.route.navigate(["add/"+-1]);
  }
  delete(i){
    event.preventDefault();
    this.userList = JSON.parse(localStorage.getItem("userData"));
    this.userList.splice(i,1);
    localStorage.setItem("userData",JSON.stringify(this.userList));
  }
  edit(id){
    console.log(id);
    this.route.navigate(["add/"+ id]);
  }
}
