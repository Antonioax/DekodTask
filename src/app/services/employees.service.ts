import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  fetchAllEmployees() {
    this.http.get(environment.url + 'employees').subscribe({
      next: (data) => console.log(data),
    });
  }
}
