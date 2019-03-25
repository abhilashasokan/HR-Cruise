import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-salutation',
  templateUrl: './salutation.component.html',
  styleUrls: ['./salutation.component.css']
})
export class SalutationComponent implements OnInit {

  @Input('salutation') salutation;
  SalutationCollection = [
    {'key': 'Mr', 'title': 'Mr.'},
    {'key': 'Mrs', 'title': 'Mrs.'},
    {'key': 'Miss', 'title': 'Miss.'}
  ];
  constructor() { }
  ngOnInit() {
  }

}
