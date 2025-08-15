import { Component } from '@angular/core';
import { DummyTrafficData } from '../../app.model';

@Component({
  selector: 'app-dashboard-traffic',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-traffic.component.html',
  styleUrl: './dashboard-traffic.component.css',
})
export class DashboardTrafficComponent {
  dummyTrafficData = DummyTrafficData;
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
}
