import { Component, OnInit } from '@angular/core';
import { HeroService } from '@app/_services/hero.service';
import { MessageService } from '@app/_services/message.service';
import { Hero } from '../../_models/hero';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[] = [];
  selectedHero?: Hero;
  
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  
  ngOnInit(): void {
    this.getHeroes();
  }

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
      this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    }

  getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
}