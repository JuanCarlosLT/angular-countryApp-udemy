import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/capital.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {
  countries: Country[] = [];
  initialValue: string = '';
  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  seacrhByCountry(term: string): void {
    console.log('Desde by contry');
    console.log(term);
    this.countriesService.serchContry(term).subscribe(countries => {
      this.countries = countries;
    });
  }
}
