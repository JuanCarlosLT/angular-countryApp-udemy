import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/capital.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {
  countries: Country[] = [];
  regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  selectedRedion?: Region;

  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRedion = this.countriesService.cacheStore.byRegion.region;
  }

  seacrhByRegion(region: Region): void {
    this.selectedRedion = region;
    this.countriesService.serchRegion(region).subscribe(countries => {
      this.countries = countries;
    });
  }
}
