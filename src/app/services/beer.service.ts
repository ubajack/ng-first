import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Beer } from '../Beer';

const headers = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8',
});

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private url = 'https://random-data-api.com/api/v2/beers';
  private beers: Beer[] = [];
  private storedBeers = new Subject<Beer>();
  private beerStoreSize = new Subject<number>();

  constructor(private http: HttpClient) {}

  getStoreSize(): number {
    return this.beers.length;
  }

  getLiveStoreSize(): Subject<number> {
    return this.beerStoreSize;
  }

  getStoredBeers(): Beer[] {
    return this.beers;
  }

  getLiveStoredBeers(): Subject<Beer> {
    return this.storedBeers;
  }

  storeBeer() {
    this.http.get<Beer>(this.url, { headers }).subscribe({
      next: (data: Beer) => {
        this.beers.push(data);
        this.storedBeers.next(data);
        this.beerStoreSize.next(this.beers.length);
      },
      error: (error) => console.error(error),
    });
  }

  getRandomBeer(): Observable<Beer> {
    return this.http.get<Beer>(this.url, { headers });
  }
}
