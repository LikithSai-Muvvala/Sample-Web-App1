import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector:"app-home",
  templateUrl:"./home.component.html",
  styleUrls:["./home.component.css"]
})
export class HomeComponent implements OnInit  {

  homeData = []
  ngOnInit() {
    for(let idx=0; idx<2; idx++) {
      this.homeData.push({
        headerName:`Header${idx}`,
        bodyData: "After you get up and running, you can place Font Awesome icons just about anywhere with the tag"
      });
    }

  }

}