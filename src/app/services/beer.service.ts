import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../Beer';

const headers = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8',
});

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private url = 'https://random-data-api.com/api/v2/beers';

  constructor(private http: HttpClient) {}

  getRandomBeer(): Observable<Beer> {
    return this.http.get<Beer>(this.url, { headers });
  }
}
