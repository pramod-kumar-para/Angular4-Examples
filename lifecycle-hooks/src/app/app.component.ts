import {
  Component, OnInit, OnChanges, DoCheck, AfterViewInit,
  AfterViewChecked, AfterContentChecked, AfterContentInit
} from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit {
  title = 'app';
  heroes: Hero[];
  myHeroObj: Hero;
  ngOnInit() {
    console.info('App component initialized');
  }
  constructor() {
    this.heroes = [];
    this.myHeroObj = {
      id: 9,
      name: 'GS'
    };
  }
  addHero(value) {
    this.heroes.push({
      id: (this.heroes.length + 1),
      name: value
    });
  }

  // This hook is called with enormous frequency and after every change detection cycle no matter where the change occured.
  ngDoCheck() {
    console.info("Do check of Appcomponent invoked");
  }

  // The AfterContent hooks concern ContentChildren, the child components that Angular projected into the component.
  ngAfterContentChecked() {
    console.info("In after content checked");
  }

  // Recall that Angular calls both AfterContent hooks before calling either of the AfterView hooks.
  // Angular completes composition of the projected content before finishing the composition of this component's view.
  // There is a small window between the AfterContent... and AfterView... hooks to modify the host view.
  ngAfterContentInit() {
    console.info("In after content init");
  }

  // The AfterView sample explores the AfterViewInit() and AfterViewChecked()
  // hooks that Angular calls after it creates a component's child views.
  ngAfterViewInit() {
    console.info("After view init");
  }

  ngAfterViewChecked() {
    console.info("In after view checked");
  }

  resetHeroes() {
    this.heroes = [];
  }

  changeHeroName() {
    this.myHeroObj.name = 'PPK';
  }
}
