import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  list: any[] = [];

  addTask(item) {
    this.list.push({ id: this.list.length, name: item });
    console.log(this.list);
  }

  removeitem(id: number) {
    // console.log(id);
    this.list = this.list.filter((item) => item.id !== id);
    // this.list.splice(this.list.length - 1);
  }
}
