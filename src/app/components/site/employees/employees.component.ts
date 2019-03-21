import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { Person } from './../model/Person';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  // dtTrigger: Subject = new Subject();
  persons: Person[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.http
    //   .get('assets/data/data.json')
    //   .subscribe((persons: any) => {
    //     this.persons = persons;
    //     console.log(this.persons);
    //   });
  }
}
