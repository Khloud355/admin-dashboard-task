import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./admin/admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./admin/admin-orders/admin-orders.module').then((m) => m.AdminOrdersModule),
  },
  {
    path: 'items',
    loadChildren: () =>
      import('./admin/admin-items/admin-items.module').then((m) => m.AdminItemsModule),
  },
 
  {
    path: 'users',
    loadChildren: () =>
      import('./admin/admin-users/admin-users.module').then((m) => m.AdminUsersModule),
  },
  {
    path: 'transaction',
    loadChildren: () =>
      import('./admin/admin-transaction/admin-transaction.module').then((m) => m.AdminTransactionModule),
  },
  // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
