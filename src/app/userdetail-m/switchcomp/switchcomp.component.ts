import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-switchcomp',
  templateUrl: './switchcomp.component.html',
  styleUrls: ['./switchcomp.component.css'],
})
export class SwitchcompComponent implements OnInit {
  color = 'red';
  getClr(val: any) {
    this.color = val;
  }
  colorselected: '';

  getProductVal(valur: any) {
    this.colorselected = valur;
    this.color = this.colorselected;
  }
  constructor() {}

  ngOnInit() {}
}
