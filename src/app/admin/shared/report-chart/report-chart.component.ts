import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-report-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './report-chart.component.html',
  styleUrls: ['./report-chart.component.scss'],
})
export class ReportChartComponent implements AfterViewInit {
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;
  @Input() reportedData: any;
  colorScheme: Color = {
    name: 'revenue-gradient',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#9FC1FB'],
  };

  ngAfterViewInit(): void {
    setTimeout(() => this.addGradientToChart(), 0);
  }

  formatYAxis(value: number): string {
    if (value === 0) return '0';
    return `$${value / 1000}k`;
  }

  addGradientToChart() {
    const svg = this.chartContainer.nativeElement.querySelector('svg');
    if (svg && !svg.querySelector('#gradient-fill')) {
      // Add gradient definition
      const defs = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'defs'
      );
      defs.innerHTML = `
        <linearGradient id="gradient-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4285F4" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#4285F4" stop-opacity="0" />
        </linearGradient>
      `;
      svg.insertBefore(defs, svg.firstChild);

      const lines = svg.querySelectorAll('path.line');
      // Target the area path (the fill under the line)
      const areaPath = svg.querySelector('path.area');
      if (areaPath) {
        areaPath.setAttribute('fill', 'url(#gradient-fill)');
      }
      lines.forEach((line: any) => {
        line.setAttribute('fill', 'url(#gradient-fill)');
      });
    }
  }
}
