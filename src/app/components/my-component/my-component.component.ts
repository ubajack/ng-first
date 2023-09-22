import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from 'src/app/Beer';
import { BeerService } from 'src/app/services/beer.service';
import { FromScratchService } from 'src/app/services/from-scratch.service';
import { MyTestService } from 'src/app/services/my-component-service/my-test.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent {
  texte: string = 'texte';
  listeLettres: string[] = [];
  param = '';
  beer?: Beer;
  storedBeersCount = 0;
  myCount = 0;

  constructor(
    private myTestService: MyTestService,
    private fromScratchService: FromScratchService,
    private beerService: BeerService,
    private router: Router
  ) {
    fromScratchService.getData().subscribe({
      next: (value) => {
        this.listeLettres.push(value);
      },
    });
    // this.storedBeersCount = beerService.getStoreSize();
    beerService.getLiveStoreSize().subscribe({
      next: (size) => (this.storedBeersCount = size),
    });
  }

  updateCount(value: number) {
    this.myCount = value;
  }

  storeBeer() {
    this.beerService.storeBeer();
    this.storedBeersCount = this.beerService.getStoreSize();
  }

  getBeer() {
    this.beerService.getRandomBeer().subscribe({
      next: (beer) => {
        this.beer = beer;
        console.table(beer);
      },
      error: (error) => {
        console.log('Error: ', error);
      },
    });
  }

  test() {
    this.myTestService.testTheService();
  }

  goToParams() {
    this.router.navigate(['parameters', this.param]);
  }

  goToBeerStore() {
    this.router.navigate(['beer-store']);
  }
}
