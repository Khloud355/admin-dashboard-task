import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';

import { AdminOrdersRoutingModule } from './admin-orders-routing.module';
import { OderDetailsComponent } from './components/oder-details/oder-details.component';

@NgModule({
  declarations: [OrdersComponent, OderDetailsComponent],
  imports: [CommonModule,
    AdminOrdersRoutingModule],

})
export class AdminOrdersModule {}
