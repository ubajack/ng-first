import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyTestService {

  constructor() { }

  testTheService(): void {
    console.log('Testing the service...');
  }

}
