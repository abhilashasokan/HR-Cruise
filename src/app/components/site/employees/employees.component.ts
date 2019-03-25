import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject, Subscription } from 'rxjs';
import { Person } from './../model/Person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EmployeesService } from 'src/app/services/employees.service';
import { ListActionsComponent } from './list-actions/list-actions.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  // dtTrigger: Subject = new Subject();
  persons: Person[] = [];
  private columnDefs;
  private rowSelection;
  private rowData: [] = [];
  private gridSubscription: Subscription;
  private frameworkComponents;

  constructor(private http: HttpClient, private employees: EmployeesService) {
    this.columnDefs = [
      {
        headerName: 'Employee ID',
        field: 'employeeId',
        resizable: true
      },
      {
        headerName: 'Full name',
        field: 'fullname',
        resizable: true
      },
      {
        headerName: 'Joining Date',
        field: 'joiningdate',
        resizable: true
      },
      {
        headerName: 'Pan',
        field: 'pan',
        resizable: true
      },
      {
        headerName: 'Designation',
        field: 'designation',
        resizable: true
      },
      {
        headerName: 'Leave Balance',
        field: 'leavebalance',
        resizable: true
      },
      {
        headerName: 'Leave Taken	',
        field: 'leavetaken',
        resizable: true
      },
      {
        headerName: 'Actions',
        field: 'Id',
        cellRenderer: 'ListActionsComponent',
      }
    ];
    this.frameworkComponents = {
      ListActionsComponent: ListActionsComponent
    };
    this.getRowHeight = function(params) {
      return 35;
    };
  }

  ngOnInit() {}

  onSelectionChanged() {}

  onGridReady(params) {
    const employees$ = this.employees.getListInformation();
    this.gridSubscription =  employees$.subscribe(employees => {
      // console.log(this.employees.prepareListData(employees));
      this.rowData = this.employees.prepareListData(employees);
    });
    params.api.sizeColumnsToFit();
  }
}
