import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';

export const dashboardRoutes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboard', component: DashboardComponent },
    
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
