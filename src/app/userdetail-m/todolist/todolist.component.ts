import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  list: any[] = [];
  add(task: any) {
    this.list.push({ id: this.list.length, name: task });
  }
  removeitem(id: number) {
    // console.log(id);
    this.list = this.list.filter((item) => item.id !== id);
  }
}
