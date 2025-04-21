import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {} from './admin-items-routing.module'
import { AdminItemsRoutingModule,itemsRoute } from './admin-items-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
   imports: [

    AdminItemsRoutingModule,
    CommonModule,RouterModule.forChild(itemsRoute)],
    exports: [RouterModule],

})
export class AdminItemsModule { }
