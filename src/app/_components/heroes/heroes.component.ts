import { Component, OnInit } from '@angular/core';
import { HeroService } from '@app/_services';
import { Hero } from '@app/_models';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getAllHeroes()
  .subscribe(data => this.heroes = data);
  }
}
