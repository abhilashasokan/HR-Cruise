import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  constructor(private http: HttpClient) { }
  @Input('state') state;
  @Output() stateChange: EventEmitter<String> = new EventEmitter<String>();
  apiUrl = environment.apiUrl;
  states$;

  async ngOnInit() {
    this.states$ = (await this.http.get(`${this.apiUrl}/states/`));
  }

  onModelChange(value: string) {
    this.stateChange.emit(value);
  }

}
