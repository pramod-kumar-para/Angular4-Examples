import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.css'],
  // To set the components encapsulation mode, use the encapsulation property
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.Emulated
})
export class ViewEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
