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
}
