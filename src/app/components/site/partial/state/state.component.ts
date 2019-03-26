import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  constructor(private http: HttpClient) { }
  apiUrl = environment.apiUrl;
  states$;

  async ngOnInit() {
    this.states$ = (await this.http.get(`${this.apiUrl}/states/`));
  }

}
