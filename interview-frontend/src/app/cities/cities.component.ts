import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CitiesService } from './cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})

export class CitiesComponent implements OnInit {

  cities$: Observable<any> | undefined


  constructor(private citiesService: CitiesService) {}

  ngOnInit(): void {
    this.cities$ = this.citiesService.getCities();
  }
}
