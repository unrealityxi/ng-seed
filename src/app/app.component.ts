import { Component, OnInit } from "@angular/core";
import { HeroesComponent }   from "./heroes.component"

@Component({
  selector: "my-app",
  template: `
    <a routerLink="/heroes">Heroes</a>
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
 title = 'Tour of Heroes';
}