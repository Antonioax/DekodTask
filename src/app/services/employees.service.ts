import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  allEmployees = new BehaviorSubject<Employee[]>([]);

  constructor(private http: HttpClient) {}

  fetchAllEmployees() {
    this.http
      .get<{ data: Employee[]; success: boolean }>(
        environment.url + 'employees'
      )
      .subscribe({
        next: (data) => this.allEmployees.next(data.data),
      });
  }
}
