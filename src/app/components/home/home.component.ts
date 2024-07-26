import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employees.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  allEmployees: any;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.allEmployees = this.employeeService.fetchAllEmployees();
    console.log(this.allEmployees);
  }
}
