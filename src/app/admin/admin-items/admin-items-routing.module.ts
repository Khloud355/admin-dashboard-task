import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 export const itemsRoute: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(itemsRoute)],
  exports: [RouterModule]
})
export class AdminItemsRoutingModule { }
