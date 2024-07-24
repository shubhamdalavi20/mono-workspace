import { Component } from '@angular/core';

import { HighchartsChartModule } from 'highcharts-angular';
import Highcharts from 'highcharts';

@Component({
  selector: 'mfe-high-chart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './high-chart.component.html',
  styleUrl: './high-chart.component.scss'
})
export class HighChartComponent {
  public Highcharts: typeof Highcharts = Highcharts;
  public updateFlag = false;

  public data = [1, 1.5, 1.2, 2, 1.8, 3, 4];

  public chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'line',
        data: this.data,
      },
    ],
  };
}
