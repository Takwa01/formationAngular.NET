import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  canAddStudent = false;
  isClicked = "";
  name="student name";
  
  constructor() {

    setTimeout(() => {
      this.canAddStudent = true;
    }, 2000);

   }

  ngOnInit(): void {
  }

  onStudentAdd(event: Event) {
    this.isClicked = "clicked "+ this.name;
    console.log(event);
  }

}
