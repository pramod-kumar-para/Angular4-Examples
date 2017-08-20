import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";

@Component({
  selector: 'template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {

  title: string;
  isUnchanged: boolean;
  heroesObj: Hero[];
  heroInput: string;
  hero: string;
  constructor() {
    this.title = 'Title';
    this.isUnchanged = true;
    this.hero = 'Pramod';
    this.heroesObj = [
      new Hero(1,'A'),
      new Hero(2,'B'),
      new Hero(3,'C')
    ];
    this.heroInput = 'name';
  }

  setHero1 = function(){
    this.hero = 'Kumar'
  }
  setHero2 = function(hero: Hero){
    if(hero){
      this.hero = hero.name;
    }
  }

  ngOnInit() {
  }

}
