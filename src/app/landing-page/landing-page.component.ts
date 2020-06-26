import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector:"app-landing-page",
  templateUrl:"./landing-page.component.html",
  styleUrls:["./landing-page.component.css"]
})
export class LandingPageComponent {

  currentYear: number = new Date().getFullYear();

  constructor(private route: Router) {}

  onHyperLinkClick() {
    this.route.navigate(['/login']);
  }

}