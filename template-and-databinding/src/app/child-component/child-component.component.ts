import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {


  @Output() propogateRequestToParent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  delegateToParent() {
    this.propogateRequestToParent.emit('Received');
  }
}
