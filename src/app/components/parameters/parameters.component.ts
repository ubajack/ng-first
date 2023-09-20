import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent {
  parameter: String | null = '';

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    console.log('Query parameters:', this.route.snapshot.paramMap);
    this.parameter = this.route.snapshot.paramMap.get('param');
  }

  buildPhrase() {
    let phrase = 'Ce nombre est';

    if (this.isEven()) {
      phrase += ' pair';
    } else {
      phrase += ' impair';
    }

    return phrase;
  }

  buildPhraseTernary() {
    let phrase = 'Ce nombre est';
    let end = this.isEven() ? ' pair' : ' impair';
    return phrase + end;
  }

  isParamANumber() {
    return !isNaN(Number(this.parameter))
  }

  isEven() {
    if (!this.isParamANumber()) {
      return false
    }
    return Number(this.parameter) % 2 === 0;
  }
}
