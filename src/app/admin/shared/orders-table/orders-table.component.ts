import { CommonModule } from '@angular/common';
import {
  Component,
  ViewChild,
  AfterViewInit,
  Input,
  OnChanges,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { OrderItem } from '../../admin-dashboard/models/order-item-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
})
export class OrdersTableComponent implements AfterViewInit, OnChanges {

constructor(public router: Router) {}

  @Input() orderTableData: OrderItem[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['Name', 'Qty', 'Order', 'Amount', 'Status'];
  dataSource = new MatTableDataSource<OrderItem>();
  clickedRows = new Set<OrderItem>();



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(): void {
    this.dataSource.data = this.orderTableData;
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }


}
