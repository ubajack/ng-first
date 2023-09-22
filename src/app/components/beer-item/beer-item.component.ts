import { Component, Input } from '@angular/core';
import { Beer } from 'src/app/Beer';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.css']
})
export class BeerItemComponent {
  @Input() beer?: Beer;
}
