import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighChartComponent } from "./high-chart/high-chart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
