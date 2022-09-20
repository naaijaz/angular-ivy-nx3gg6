import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  valDisp: any = '';
  getvalue(inputval: any) {
    this.valDisp = inputval;
  }
  constructor() {}

  ngOnInit() {}
}
