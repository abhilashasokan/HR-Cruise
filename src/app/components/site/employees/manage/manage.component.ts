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
    joiningDate: undefined,
    name: {
      firstName: '',
      lastName: '',
      salutation: ''
    },
    address: {
      streetAddress1: '',
      streetAddress2: '',
      city: '',
      state: 'KL',
      country: '',
      pinCode: ''
    },
    employmentDetails: {
      designation: '',
      dateOfJoining: undefined,
      dateOfReleaving: undefined,
      compensationDetails: {
        pan: '',
        bankName: '',
        accountNumber: undefined,
        payDate: undefined,
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
      dob: undefined,
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
    this.employeeId = this.route.snapshot.queryParams['employeeId'];
    const employee$ = this.employees.getEmployeeInformation(this.employeeId);
    this.employeeSubscription = employee$.subscribe((data: Employee) => {
      if (data) {
        this.currentEmployees = data;
      }
    });
  }

  saveEmployee() {
    console.log(this.currentEmployees);
    this.employees.putEmployeeInformation(this.currentEmployees, this.employeeId);
  }

  backToList() {
    this.router.navigate(['employees']);
  }

  stateChange($event) {
    this.currentEmployees.address.state = $event;
  }

  countryChange($event) {
    this.currentEmployees.address.country = $event;
  }

  salutationChange($event) {
    console.log($event);
    if ($event.control === 'EmployeeSalutation') {
      this.currentEmployees.name.salutation = $event.value;
    } else {
      this.currentEmployees.personalDetails.nameOfFather.salutation = $event.value;
    }
  }

  ngOnDestroy() {
    this.employeeSubscription.unsubscribe();
  }
}
