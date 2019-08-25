import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { OrderComponent } from "./order/order.component";


const routes: Routes = [
  {path: 'index' , component: HomeComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'order' , component: OrderComponent},
  {path: '',  redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
