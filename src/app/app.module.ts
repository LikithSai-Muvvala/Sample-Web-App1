import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AppRoutingModule, RoutingComponents } from "./app-routing.module";

import { AppComponent } from './app.component';

@NgModule({
  imports: [ 
    BrowserModule, FormsModule,
    HttpClientModule, AppRoutingModule 
  ],
  declarations: [
    AppComponent, LandingPageComponent,
    RoutingComponents
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
