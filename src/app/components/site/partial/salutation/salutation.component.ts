import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-salutation',
  templateUrl: './salutation.component.html',
  styleUrls: ['./salutation.component.css']
})
export class SalutationComponent implements OnInit {

  @Input('salutation') salutation;
  @Input('control') control;
  @Output() salutationChange: EventEmitter<{}> = new EventEmitter<{}>();

  SalutationCollection = [
    {'key': 'Mr', 'title': 'Mr.'},
    {'key': 'Mrs', 'title': 'Mrs.'},
    {'key': 'Miss', 'title': 'Miss.'}
  ];
  constructor() { }
  ngOnInit() {
  }

  onModelChange(value: string) {
    this.salutationChange.emit({ value, control: this.control });
  }


}
