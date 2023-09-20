import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';

import { MyTestService } from './services/my-component-service/my-test.service';
import { TestService } from './services/second-component-service/test.service';
import { FromScratchService } from './services/from-scratch.service';
import { CustomService } from './services/custom.service';
import { ParametersComponent } from './components/parameters/parameters.component';
import { MyFormComponent } from './components/my-form/my-form.component';

@NgModule({
  declarations: [AppComponent, MyComponentComponent, SecondComponentComponent, ParametersComponent, MyFormComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [MyTestService, TestService, FromScratchService, CustomService],
  bootstrap: [AppComponent],
})
export class AppModule {}
