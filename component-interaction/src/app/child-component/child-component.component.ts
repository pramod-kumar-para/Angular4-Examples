import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() myObj: Object;
  // tslint:disable-next-line:no-input-rename
  @Input('alias') aliasName: string;

  constructor() { }

  ngOnInit() {
  }

}
