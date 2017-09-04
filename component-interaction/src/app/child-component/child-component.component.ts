import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {


  private _message: string;
  age = 20;
  @Input() myObj: Object;
  // tslint:disable-next-line:no-input-rename
  @Input('alias') aliasName: string;
  @Output() propogateRequest = new EventEmitter<string>();
  // intercept input property changes with a setter
  @Input()
  set message(data: string) {
    this._message = data.toUpperCase() || 'No Message Found';
  }

  get message(): string {
    return this._message;
  }
  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.propogateRequest.emit('Sent message!');
  }

}
