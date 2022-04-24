import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderAddComponent } from './order/order-add/order-add.component';
import { OrderViewComponent } from './order/order-view.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "addOrder", component: OrderAddComponent },
  { path: "viewOrder", component: OrderViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
