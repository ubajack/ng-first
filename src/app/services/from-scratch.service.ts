import { Injectable } from '@angular/core';
import { MyTestService } from './my-component-service/my-test.service';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FromScratchService {
  data = ['a', 'b', 'c', 'd', 'e', 'f'];

  constructor(private testService: MyTestService) {}

  injectionTest() {
    this.testService.testTheService();
  }

  getDataSimple(): Observable<string> {
    return from(this.data);
  }

  getData(): Observable<string> {
    return new Observable((subscriber) => {
      this.data.forEach((letter, index) => {
        setTimeout(() => {
          subscriber.next(letter);
        }, 1000 * (index + 1));
      });
    });
  }
}
