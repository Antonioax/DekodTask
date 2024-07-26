import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employees.service';
import { Subscription } from 'rxjs';
import { Employee } from '../../models/employee';
import { PrettyDatePipe } from "../../pipes/pretty-date.pipe";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrettyDatePipe],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  allEmployees: Employee[] = [];
  allEmployeesSub!: Subscription;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.allEmployeesSub = this.employeeService.allEmployees.subscribe({
      next: (data) => (this.allEmployees = data),
    });
  }

  ngOnDestroy() {
    this.allEmployeesSub.unsubscribe();
  }
}
