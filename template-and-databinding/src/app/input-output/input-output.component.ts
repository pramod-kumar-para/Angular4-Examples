import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {


  // You can specify an input/output property either with a decorator or in a metadata array. Don't do both!
  // @Component({
  //   inputs: ['hero'],
  //   outputs: ['deleteRequest'],
  // })
  @Input() hero: Hero;

  // You can specify the alias for the property name by passing it into the input/output decorator like this
  // @Output('myClick') propogateRequest = new EventEmitter<Hero>();
  // myClick is the alias.
  // @Directive({
  //   outputs: ['clicks:myClick']  // propertyName:alias
  // })
  @Output() propogateRequest = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit() {
  }

  propogateChange() {
    this.propogateRequest.emit({
      id: 2,
      name: 'Hulk'
    });
  }

}
