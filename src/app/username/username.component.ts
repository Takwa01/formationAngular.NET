import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  userName="";
  
  constructor() { }

  ngOnInit(): void {
  }

  onRest(e: Event) {
    this.userName ="";
  }
  checkIfDeseabled(){
    if (this.userName=="")
    return true;
  }

}
