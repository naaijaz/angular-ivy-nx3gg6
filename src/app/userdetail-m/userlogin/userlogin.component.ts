import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent implements OnInit {
  callfun(name: any, mobile: number) {
    console.log(name, mobile);
  }
  constructor() {}

  ngOnInit() {}
}
