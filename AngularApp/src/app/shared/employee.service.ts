import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';
import { Department } from './department.model';

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  departments: Department[];
  readonly baseURL = 'http://localhost:3000/employees';
  readonly depURL = 'http://localhost:3000/department';

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    console.log(emp);
    return this.http.post(this.baseURL, emp);
  }
  postDepartment(dep: Department) {
    return this.http.post(this.depURL, dep);
  }
  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  getDepartmentList() {
    return this.http.get(this.depURL);
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
