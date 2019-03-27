import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})

export class CountriesComponent implements OnInit {
  @Input('country') country;
  @Output() countryChange: EventEmitter<String> = new EventEmitter<String>();
  apiUrl = environment.apiUrl;
  countries$;
  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.countries$ = (await this.http.get(`${this.apiUrl}/countries/`));
  }
  onModelChange(value: string) {
    this.countryChange.emit(value);
  }


}
