import { Component, OnInit } from '@angular/core';
import { V_AnalyticCardData } from '../../v-model/v-analyticsCardData';
import { AdminDashboardService } from '../../services/admin-dashboard.service';
import { OrderItem } from '../../models/order-item-model';
import { VisitChart } from '../../models/visit-chat-model';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  loading$ = this.loadingService.loading$;
  analyticsData: V_AnalyticCardData[] = [];
  ordersData: OrderItem[] = [];
  chartVisitData: VisitChart[] = [];
  chartReportedData: any;
  selectedVisitedIndex: number = 1;
  selectedReportIndex: number = 1;
  analyticCardTitles = [
    {
      name: 'Total Revenue',
      image: '../../../../../assets/admin-dashoard-images/revenge.svg',
    },
    {
      name: 'Today Revenue',
      image: '../../../../../assets/admin-dashoard-images/today-rev.svg',
    },
    {
      name: 'Items Sold',
      image: '../../../../../assets/admin-dashoard-images/sold.svg',
    },
    {
      name: 'Users Active',
      image: '../../../../../assets/admin-dashoard-images/active.svg',
    },
  ];
  visitedItems = ['D', 'W', 'M', 'Y'];
  reportItems = ['Day', 'Week', 'Month', 'Year'];
  errorMessage: string | null = null;

  constructor(
    private adminDashboardService: AdminDashboardService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.getAnalyticsData();
    this.getOrders();
    if (this.selectedVisitedIndex == 1) {
      this.getVisitChartData('W');
    }
    if (this.selectedVisitedIndex == 1) {
      this.getReportedChartData('Week');
    }
  }

  selectVisitItem(index: number, item: string) {
    this.selectedVisitedIndex = index;
    this.getVisitChartData(item);
  }

  selectReportItem(index: number, item: string) {
    this.selectedReportIndex = index;
    this.getReportedChartData(item);
  }

  getAnalyticsData() {
    this.loadingService.setLoadingState(true);
    this.adminDashboardService.getAnalyticsCardData().subscribe((res) => {
      this.analyticsData = res.map((item, index) => {
        const additional = this.analyticCardTitles[index] || {};
        return {
          ...item,
          name: additional.name || '',
          image: additional.image || '',
        };
      });
    },
    (error) => {
      this.errorMessage = 'An error occurred while fetching orders.';
      console.error(error);
    },
    () => {
      this.loadingService.setLoadingState(false);
    });
  }

  getOrders() {
    this.loadingService.setLoadingState(true);
    this.adminDashboardService.getOrdersData().subscribe(
      (data) => {
        this.ordersData = data;
      },
      (error) => {
        this.errorMessage = 'An error occurred while fetching orders.';
        console.error(error);
      },
      () => {
        this.loadingService.setLoadingState(false);
      }
    );
  }

  getVisitChartData(item: any) {
    this.loadingService.setLoadingState(true);
    this.adminDashboardService.getVisitsData(item).subscribe((res) => {
      this.chartVisitData = res;
      console.log(this.chartVisitData);
    },
    (error) => {
      this.errorMessage = 'An error occurred while fetching orders.';
      console.error(error);
    },
    () => {
      this.loadingService.setLoadingState(false);
    });
  }

  getReportedChartData(item: any) {
    this.loadingService.setLoadingState(true);
    this.adminDashboardService.getReportedData(item).subscribe((res) => {
      this.chartReportedData = this.transformData(res);
    },
    (error) => {
      this.errorMessage = 'An error occurred while fetching orders.';
      console.error(error);
    },
    () => {
      this.loadingService.setLoadingState(false);
    });
  }

  transformData(data: { name: string; value: number }[]): any[] {
    return [
      {
        name: 'Revenue',
        series: data,
      },
    ];
  }
}
