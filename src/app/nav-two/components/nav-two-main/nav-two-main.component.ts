import { slideInAnimation } from './../../../constants/animations';
import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-nav-two-main",
  templateUrl: "./nav-two-main.component.html",
  styleUrls: ["./nav-two-main.component.css"],
  animations:[slideInAnimation]
})
export class NavTwoMainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData["index"]
    );
  }
}
