import { Component } from '@angular/core';
import { MyTestService } from 'src/app/services/my-component-service/my-test.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {

  constructor(private myTestService: MyTestService){}


  test() {
    this.myTestService.testTheService();
  }

}
