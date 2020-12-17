import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  Name = "student2";
  Age = 20;
  Date = "11/1/1991";
  

  constructor() {}

  ngOnInit(): void {
  }


  

}
