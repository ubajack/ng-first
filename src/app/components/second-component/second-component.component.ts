import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
})
export class SecondComponentComponent {
  texteModifiable = 'red';
  showText = false;
  listeCouleurs = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
  datePicked = new Date().toISOString().slice(0, 10);

  constructor(private router: Router){}

  isRed() {
    return this.texteModifiable === 'rouge';
  }

  isBlue() {
    return this.texteModifiable === 'bleu';
  }

  toggleShowText() {
    this.showText = !this.showText;
  }

  goHome($event: Event) {
    console.log('event', $event);
    $event.preventDefault();
    this.router.navigate(['/']);
  }
}
