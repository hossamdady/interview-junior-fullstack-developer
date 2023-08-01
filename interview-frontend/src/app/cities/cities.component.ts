import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CitiesService } from './cities.service';
import { City } from '../interfaces/city';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})

export class CitiesComponent implements OnInit {

  city: City = {
    uuid: '',
    cityName: '',
    count: 0
  };

  cities$: Observable<any> | undefined;

  cities: City[] = [];
  citiesToDisplay: City[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private citiesService: CitiesService) {}

  ngOnInit(): void {
    this.cities$ = this.citiesService.getCities();
  }

  submitCity() {    
    this.citiesService.getCities()
      .subscribe(
        res => {
          this.cities = res.filter(elem => elem.cityName.startsWith(this.city.cityName));
          console.log(this.cities);
        }, 
        err => console.log(err)
      );
  }

  paginateCities() {
    this.paginator.pageIndex = 0; // Reset the paginator to the first page
    this.paginator.pageSize = 5; // Set the number of items to display per page
    this.paginator._changePageSize(this.paginator.pageSize);
    this.updateDisplayedCities();
  }

  updateDisplayedCities() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    this.citiesToDisplay = this.cities.slice(startIndex, endIndex);
  }

}
