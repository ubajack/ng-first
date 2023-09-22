import { Component } from '@angular/core';
import { Beer } from 'src/app/Beer';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css'],
})
export class BeersComponent {
  beers: Beer[] = [];

  constructor(private beerService: BeerService) {
    this.beers = beerService.getStoredBeers();
  }
}
