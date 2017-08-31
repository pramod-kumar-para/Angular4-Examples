import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  myObject: Object;
  constructor() {
    this.name = 'Kumar';
    this.myObject = {
      id: 2,
      name: 'Sample'
    };
  }
}
