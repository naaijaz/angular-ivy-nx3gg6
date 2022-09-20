import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  Num: number = 0;
  counter(type: string) {
    type === 'add' ? this.Num++ : this.Num--;
  }
}
