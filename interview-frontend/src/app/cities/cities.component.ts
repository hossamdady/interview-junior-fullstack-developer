import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CitiesService } from './cities.service';
import { City } from '../interfaces/city';


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

  constructor(private citiesService: CitiesService) {}

  ngOnInit(): void {
    this.cities$ = this.citiesService.getCities();
  }

  submitCity() {    
    this.citiesService.getCities()
      .subscribe(
        res => {
          this.cities = res.filter(elem => elem.cityName == this.city.cityName);
          console.log(this.cities);
        }, 
        err => console.log(err)
      );
  }

}
