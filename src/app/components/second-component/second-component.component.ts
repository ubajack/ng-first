import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
})
export class SecondComponentComponent {
  texteModifiable = 'red';
  showText = false;
  listeCouleurs = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
  datePicked = new Date();

  isRed() {
    return this.texteModifiable === 'rouge';
  }

  isBlue() {
    return this.texteModifiable === 'bleu';
  }

  toggleShowText() {
    this.showText = !this.showText;
  }
}
