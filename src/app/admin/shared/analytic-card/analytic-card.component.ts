import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { V_AnalyticCardData } from '../../admin-dashboard/v-model/v-analyticsCardData';


@Component({
  selector: 'app-analytic-card',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './analytic-card.component.html',
  styleUrls: ['./analytic-card.component.scss']
})
export class AnalyticCardComponent {

@Input() analyticsCardData?:V_AnalyticCardData

}
