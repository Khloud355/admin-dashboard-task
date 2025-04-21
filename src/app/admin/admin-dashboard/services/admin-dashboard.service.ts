import { Injectable } from '@angular/core';
import { AnalyticCardData } from '../models/analytic-modal';
import { catchError, delay, finalize, Observable, of } from 'rxjs';
import { ANALYTIC_CARDS } from '../_mock/analytic-card.mock';
import { OrderItem } from '../models/order-item-model';
import { mockOrders } from '../_mock/order-item-mock';
import { VisitChartData } from '../_mock/visit-chart-mock';
import { VisitChart } from '../models/visit-chat-model';

import { ReportChartData } from '../_mock/report-chart-mock';

@Injectable({
  providedIn: 'root',
})
export class AdminDashboardService {


  getAnalyticsCardData(): Observable<AnalyticCardData[]> {
    return of(ANALYTIC_CARDS).pipe(
      delay(2000),
      catchError(error => {
        return of([]);
      }),
    
    );
  }

  getOrdersData(): Observable<OrderItem[]> {
    return of(mockOrders).pipe(
      delay(2000),
      catchError(error => {
        return of([]);
      }),
    
    );
  }

  getVisitsData(periodType:'D'): Observable<VisitChart[]> {
    return of(VisitChartData[periodType]).pipe(
      delay(2000),
      catchError(error => {
        return of([]);
      }),
    
    );
  }

  getReportedData(periodType:'Day'):Observable<VisitChart[]> {
    return of(ReportChartData[periodType]).pipe(
      delay(2000),
      catchError(error => {
        return of([]);
      }),
    
    );;
  }
}
