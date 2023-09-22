import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyComponentComponent } from './components/my-component/my-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { BeersComponent } from './components/beers/beers.component';

const routes: Routes = [
  { path: '', component: MyComponentComponent },
  { path: 'formulaire', component: MyFormComponent },
  { path: 'second', component: SecondComponentComponent },
  { path: 'parameters/:param', component: ParametersComponent },
  { path: 'beer-store', component: BeersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
