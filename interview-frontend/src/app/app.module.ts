import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CitiesComponent } from './cities/cities.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
