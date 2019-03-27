import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeListItem } from '../components/site/model/EmployeeListItem';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  apiUrl = environment.apiUrl;
  listData: EmployeeListItem[] = [];
  employee: EmployeeListItem;
  constructor(private http: HttpClient) { }

  getListInformation() {
    return this.http.get(`${this.apiUrl}/employees/`);
  }

  getEmployeeInformation(employeeId: string) {
    return this.http.get(`${this.apiUrl}/employees/${employeeId}`);
  }

  prepareListData(data) {
    this.listData = [];
    for (const item of data) {
      this.employee = {
        id: item.id,
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

  putEmployeeInformation(data, id) {
    if (id) {
      return this.http.put(`${this.apiUrl}/employees/${id}`, JSON.stringify(data)).subscribe();
    } else {
      return this.http.post(`${this.apiUrl}/employees`, data).subscribe();
    }
  }
}
