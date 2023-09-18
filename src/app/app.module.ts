import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';

import { MyTestService } from './services/my-component-service/my-test.service';
import { TestService } from './services/second-component-service/test.service';

@NgModule({
  declarations: [AppComponent, MyComponentComponent, SecondComponentComponent],
  imports: [BrowserModule],
  providers: [MyTestService, TestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
