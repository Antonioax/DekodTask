import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employees.service';
import { Subscription } from 'rxjs';
import { Employee } from '../../models/employee';
import { PrettyDatePipe } from '../../pipes/pretty-date.pipe';
import { PrettyJobPipe } from '../../pipes/pretty-job.pipe';
import { CommonModule } from '@angular/common';
import { Jobs } from '../../models/jobs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, PrettyDatePipe, PrettyJobPipe],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  allEmployees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  allEmployeesSub!: Subscription;

  allJobs = Jobs;

  search: string = '';
  selectedJob = 'Svi';
  selectedSort = 'Ime';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.allEmployeesSub = this.employeeService.allEmployees.subscribe({
      next: (data) => {
        this.allEmployees = data;
        this.filteredEmployees = this.allEmployees;
      },
    });
  }

  ngOnDestroy() {
    this.allEmployeesSub.unsubscribe();
  }

  onRefresh() {
    this.employeeService.fetchAllEmployees();
  }

  onFilterName() {
    this.filteredEmployees = this.allEmployees.filter((employee) => {
      let fullName =
        employee.firstName.toLowerCase() +
        ' ' +
        employee.lastName.toLowerCase();
      return (
        employee.firstName.toLowerCase().includes(this.search.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(this.search.toLowerCase()) ||
        fullName.includes(this.search.toLowerCase())
      );
    });
  }

  onSort() {
    switch (this.selectedSort) {
      case 'ImeA':
        this.filteredEmployees = this.filteredEmployees.sort((a, b) =>
          a.firstName.localeCompare(b.firstName)
        );
        break;
      case 'ImeZ':
        this.filteredEmployees = this.filteredEmployees.sort((a, b) =>
          b.firstName.localeCompare(a.firstName)
        );
        break;
      case 'PrezimeA':
        this.filteredEmployees = this.filteredEmployees.sort((a, b) =>
          a.lastName.localeCompare(b.lastName)
        );
        break;
      case 'PrezimeZ':
        this.filteredEmployees = this.filteredEmployees.sort((a, b) =>
          b.lastName.localeCompare(a.lastName)
        );
        break;
      case 'PozicijaA':
        this.filteredEmployees = this.filteredEmployees.sort((a, b) =>
          a.jobTitle.localeCompare(b.jobTitle)
        );
        break;
      case 'PozicijaZ':
        this.filteredEmployees = this.filteredEmployees.sort((a, b) =>
          b.jobTitle.localeCompare(a.jobTitle)
        );
        break;
    }
  }
}
