import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-data-bind',
  templateUrl: './two-way-data-bind.component.html',
  styleUrls: ['./two-way-data-bind.component.css']
})
export class TwoWayDataBindComponent {

  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();
  constructor() { }

  inc() {
    this.resizeBy(+1);
  }

  dec() {
    this.resizeBy(-1);
  }

  resizeBy(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
