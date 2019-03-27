import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-actions',
  templateUrl: './list-actions.component.html',
  styleUrls: ['./list-actions.component.css']
})
export class ListActionsComponent implements ICellRendererAngularComp {

    params;

    refresh(params: any): boolean {
        return true;
    }

    constructor(private router: Router) {

    }
    agInit(params: any): void {
        this.params = params;
    }

    public invokeParentMethod() {
        this.router.navigate(['employees/manage'], { queryParams: { employeeId: this.params.data.Id } });
    }
}
