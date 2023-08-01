import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    CitiesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CitiesModule { }
