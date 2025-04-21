import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { VisitChart } from '../../admin-dashboard/models/visit-chat-model';


@Component({
  selector: 'app-visit-chart',
  templateUrl: './visit-chart.component.html',
  standalone:true,
  imports: [CommonModule,NgxChartsModule], 
  styleUrls: ['./visit-chart.component.scss'],

})



export class VisitChartComponent implements OnChanges {
 @Input() data:VisitChart[] =[]

ngOnChanges(): void {
  
  console.log(this.data,"data")
}


}




