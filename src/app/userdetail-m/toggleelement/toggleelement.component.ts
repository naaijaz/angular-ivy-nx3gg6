import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggleelement',
  templateUrl: './toggleelement.component.html',
  styleUrls: ['./toggleelement.component.css'],
})
export class ToggleelementComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  Display = true;
  togglebtn() {
    this.Display = !this.Display;
  }
}
