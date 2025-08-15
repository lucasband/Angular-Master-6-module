import { Component } from '@angular/core';
import { NewTicketsComponent } from "./new-tickets/new-tickets.component";

@Component({
  selector: 'app-dashboard-todo',
  standalone: true,
  imports: [NewTicketsComponent],
  templateUrl: './dashboard-todo.component.html',
  styleUrl: './dashboard-todo.component.css',
})
export class DashboardTodoComponent {}
