import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {

  title: string;
  isUnchanged: boolean;
  heroesObj: Hero[];
  heroInput: string;
  hero: string;
  show: boolean;
  myString: string;
  heroImageUrl: string;
  myName = 'initial';
  classes: string;
  valueEmitted: string;
  evilTitle: string;
  isButtonClicked: boolean;
  myClasses: string;
  constructor() {
    this.isButtonClicked = false;
    this.title = 'Title';
    this.isUnchanged = true;
    this.hero = 'Pramod';
    this.show = true;
    this.myString = 'Input Value';
    this.evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
    this.heroesObj = [
      new Hero(1, 'A'),
      new Hero(2, 'B'),
      new Hero(3, 'C')
    ];
    this.classes = 'red';
    this.heroInput = 'name';
    this.heroImageUrl = 'sample';
    this.myClasses = '';
  }

  setHero1 = function () {
    this.hero = 'Kumar';
  };

  setHero2 = function (hero: Hero) {
    if (hero) {
      this.hero = hero.name;
    }
  };


  clickButton = function () {
    this.hero = 'Ironman';
  };


  printMyName = function () {
    this.myName = 'changed';
  };

  toggleButton() {
    this.isButtonClicked = !this.isButtonClicked;
    this.myClasses = 'isActive';
  }

  receivedEvent(event) {
    this.valueEmitted = event;
  }

  ngOnInit() {
  }

}
