
import {  RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { NgModule } from '@angular/core';
import { OderDetailsComponent } from './components/oder-details/oder-details.component';


export const ordersRoute: Routes = [
  {
    path: '', 
    component: OrdersComponent
  },
  {
    path: 'details/:id',
    component: OderDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ordersRoute)],
  exports: [RouterModule]
})
export class AdminOrdersRoutingModule { }


