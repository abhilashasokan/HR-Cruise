import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  @Input('designation') designation;
  designationCollection = [
    {'key': 'SSE', 'title': 'Senior software engineer'},
    {'key': 'ASE', 'title': 'Assistant systems engineer'},
    {'key': 'EA', 'title': 'Enterprise architect'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
