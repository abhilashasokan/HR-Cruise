import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Employee } from './../../model/Employee';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit, OnDestroy {
  employeeId: string;
  employeeSubscription: Subscription;
  date = new Date();
  currentEmployees: Employee = {
    employeeId: '',
    joiningDate: new Date(),
    name: {
      firstName: '',
      lastName: '',
      salutation: ''
    },
    address: {
      streetAddress1: '',
      streetAddress2: '',
      city: '',
      state: '',
      country: '',
      pinCode: ''
    },
    employmentDetails: {
      designation: '',
      dateOfJoining: new Date(),
      dateOfReleaving: new Date(),
      compensationDetails: {
        pan: '',
        bankName: '',
        accountNumber: undefined,
        payDate: new Date(),
        basicPay: undefined,
        hra: undefined,
        conveyance: undefined,
        specialAllowance: undefined,
        grossSalary: undefined,
        tds: undefined,
        totalDeduction: undefined,
        grossSalaryInWords: undefined
      }
    },
    personalDetails: {
      dob: new Date(),
      pan: '',
      nameOfFather: {
        firstName: '',
        lastName: '',
        salutation: ''
      }
    },
    leaveDetails: {
      leaveBalance: undefined,
      leaveTaken: undefined
    }
  } as Employee;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employees: EmployeesService
  ) {}

  ngOnInit() {
    this.employeeId = this.route.snapshot.queryParams["employeeId"];
    const employee$ = this.employees.getEmployeeInformation(this.employeeId);
    this.employeeSubscription = employee$.subscribe(data => {
      if (data) {
        this.currentEmployees = data;
      }
    });
  }

  saveEmployee() {
    console.log(this.currentEmployees);
  }

  backToList() {
    this.router.navigate(["employees"]);
  }

  ngOnDestroy() {
    this.employeeSubscription.unsubscribe();
  }
}
