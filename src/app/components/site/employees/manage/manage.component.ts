import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  employeeId: string;
  employeeSubscription: Subscription;
  employees: <any>;
  constructor(private route: ActivatedRoute, private employees: EmployeesService) { }

  ngOnInit() {
    this.employeeId = this.route.snapshot.queryParams['employeeId'];
    const employee$ = this.employees.getEmployeeInformation(this.employeeId);
    this.employeeSubscription =  employee$.subscribe(data => {
      this.employees = data;
    });
  }
}
