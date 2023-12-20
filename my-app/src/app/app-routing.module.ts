import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PizzaComponent } from './pizza/pizza.component';



const routes: Routes = [
  
        { path: '', component: HomeComponent },
        { path: 'pizza', component: PizzaComponent },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
