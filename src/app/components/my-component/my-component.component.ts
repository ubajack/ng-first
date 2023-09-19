import { Component } from '@angular/core';
import { FromScratchService } from 'src/app/services/from-scratch.service';
import { MyTestService } from 'src/app/services/my-component-service/my-test.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {

  texte: string = 'texte';
  listeLettres: string[] = []

  constructor(
    private myTestService: MyTestService,
    private fromScratchService: FromScratchService
    ){
    this.listeLettres = fromScratchService.getData();
  }


  test() {
    this.myTestService.testTheService();
  }

}
