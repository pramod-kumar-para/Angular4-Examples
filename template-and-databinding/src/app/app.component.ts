import { Component } from '@angular/core';
import { Hero } from './hero'; 
// templateUrl or template can be used.
// which ever comes last will be rendered in the browser.
// For example in the below example if the templateUrl is followed by 
// something like
// template: `<h1> Helloworld </h1>` (template inline)
// Hello world will be rendered and templateUrl will be neglected.


// Angular creates an instance of the component when encountered in HTML 
// as <app-root></app-root>
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  name: string;
  heroes: string[];
  // use typescript class to shape model data for the component.
  heroesObj: Hero[];
  show: boolean;
  constructor() {
    this.title = 'Data binding';
    this.name = "Thor";
    this.heroes = ['Ironman', 'Superman', 'Antman'];
    this.heroesObj = [
      new Hero(1,'A'),
      new Hero(2,'B'),
      new Hero(3,'C')
    ]
    this.show = true;
  }
}
