import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnalyticCardComponent } from '../shared/analytic-card/analytic-card.component';
import { OrdersTableComponent } from '../shared/orders-table/orders-table.component';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing-module';
import { ReportChartComponent } from '../shared/report-chart/report-chart.component';
import { VisitChartComponent } from '../shared/visit-chart/visit-chart.component';
import { LoadingService } from './services/loading.service';

import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    AnalyticCardComponent,
    OrdersTableComponent,
    VisitChartComponent,
    ReportChartComponent,

  ],
  providers:[
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  

})
export class AdminDashboardModule {}
