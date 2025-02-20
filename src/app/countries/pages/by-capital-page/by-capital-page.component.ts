import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/capital.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {

  countries: Country[] = [];
  isLoading: boolean = false;
  initialValue: string = '';
  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital!.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital!.term;
  }

  seacrhByCapital(term: string): void {
    this.isLoading = true;
    this.countriesService.serchCapital(term).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
