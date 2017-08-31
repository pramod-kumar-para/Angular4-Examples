import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-onchanges',
  templateUrl: './onchanges.component.html',
  styleUrls: ['./onchanges.component.css']
})
export class OnchangesComponent implements OnInit, OnChanges {


  @Input() myName: string;
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

  // Angular calls its ngOnChanges() method whenever it detects changes to input properties of the component (or directive).
  // ngOnChanges wont be invoked when the input is an object and one of the values is changed.
  // ngOnChanges will be invoked only when the value of input property changes, if its a reference object ,
  // reference object changes will trigger ngOnChanges method
  ngOnChanges(changes: SimpleChanges) {
    console.info("In OnChanges component on change method");
    console.info(changes);
  }

}
