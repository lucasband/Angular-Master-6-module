import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DashboardStatusComponent } from './dashboard/dashboard-status/dashboard-status.component';
import { DashboardTrafficComponent } from './dashboard/dashboard-traffic/dashboard-traffic.component';
import { DashboardTodoComponent } from './dashboard/dashboard-todo/dashboard-todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    DashboardStatusComponent,
    DashboardTrafficComponent,
    DashboardTodoComponent,
  ],
})
export class AppComponent {
}
