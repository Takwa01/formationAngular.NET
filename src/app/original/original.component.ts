import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-original',
  templateUrl: './original.component.html',
  styleUrls: ['./original.component.scss']
})
export class OriginalComponent implements OnInit {

  title = 'Revision';
  
  constructor() { }

  ngOnInit(): void {
  }

}
