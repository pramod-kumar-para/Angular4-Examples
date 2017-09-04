import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(ChildComponentComponent)
  private myChildComponent: ChildComponentComponent;

  name: string;
  myObject: Object;
  myMessage: string;

  ngAfterViewInit() {
    console.info("In after view init of app component");
  }

  constructor() {
    this.name = 'Kumar';
    this.myObject = {
      id: 2,
      name: 'Sample'
    };
  }

  printMessage(data: string) {
    this.myMessage = data;
  }

  AccessChildValue() {
    console.info(this.myChildComponent);
  }
}
