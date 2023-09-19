import { Injectable } from "@angular/core";
import { MyTestService } from "./my-component-service/my-test.service";

@Injectable({
    providedIn: 'root'
})
export class FromScratchService {

    data = ['a', 'b', 'c', 'd', 'e', 'f'];

    constructor(private testService: MyTestService){}

    injectionTest() {
        this.testService.testTheService()
    }

    getData() {
        return this.data;
    }

}