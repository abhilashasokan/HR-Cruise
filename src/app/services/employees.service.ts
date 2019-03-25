import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../components/site/model/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  ROOT_URL = 'http://localhost:8090';
  listData: Employee[] = [];
  employee: Employee;
  constructor(private http: HttpClient) { }

  getListInformation() {
    return this.http.get(`${this.ROOT_URL}/employees/`);
  }

  getEmployeeInformation(employeeId: string) {
    return this.http.get(`${this.ROOT_URL}/employees/${employeeId}`);
  }

  prepareListData(data) {
    this.listData = [];
    for (const item of data) {
      this.employee = {
        Id: item.id,
        employeeId: item.employeeId,
        fullname: `${item.name.salutation}  ${item.name.firstName} ${item.name.lastName}`,
        joiningdate: item.employmentDetails.dateOfJoining,
        pan: item.personalDetails.pan,
        designation: item.employmentDetails.designation,
        leavebalance: item.leaveDetails.leaveBalance,
        leavetaken: item.leaveDetails.leaveTaken,
      };
      this.listData.push(this.employee);
    }
    return this.listData;
  }
}
