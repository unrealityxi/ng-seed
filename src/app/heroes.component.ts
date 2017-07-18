import { Component, Input, OnInit } from '@angular/core';
import { Hero }                     from "./hero";
import { HeroService }              from "./hero.service";

// The component itself (decorator). 
// This will attach these props to next thing it sees below 
// is equivalent of Reacts object wrapper
// Is either setting up prototype for next thing 
// or is directly injecting it as props. 

@Component({
  // A selector to be used as <my-heroes></my-heroes>
  // in this case our main guy. 
  selector: 'my-heroes',

  // HTML template. 
  // can be URL with diferent syntax
  // or inline. 

  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        (click)="onSelect(hero)"
        [class.selected]="hero === selectedHero"
      >
      <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
  ` ,
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {

  // type declarations for to be received props
  selectedHero: Hero;
  heroes: Hero[];
  constructor(private heroService: HeroService) {
    
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
      this.heroService.getHeroes().then(heroes => 
                                          this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}






