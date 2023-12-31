import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';

import { MyTestService } from './services/my-component-service/my-test.service';
import { TestService } from './services/second-component-service/test.service';
import { FromScratchService } from './services/from-scratch.service';
import { CustomService } from './services/custom.service';
import { ParametersComponent } from './components/parameters/parameters.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { CounterComponent } from './components/counter/counter.component';
import { BeersComponent } from './components/beers/beers.component';
import { BeerItemComponent } from './components/beer-item/beer-item.component';

@NgModule({
  declarations: [AppComponent, MyComponentComponent, SecondComponentComponent, ParametersComponent, MyFormComponent, CounterComponent, BeersComponent, BeerItemComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule],
  providers: [MyTestService, TestService, FromScratchService, CustomService],
  bootstrap: [AppComponent],
})
export class AppModule {}
