import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { slideInAnimation } from "./constants/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = "slicing-test-nabil";
  prevPageIndex = 0; //for animation left or right based on difference between prev on new page index
  /**
   * Get outlet data index params, set direction param and return anim state with params
   * @param outlet router outlet object
   */
  prepareRoute(outlet: RouterOutlet) {
    const newPageIndex =
      outlet && outlet.activatedRouteData && outlet.activatedRouteData["index"];
    const params = this.getEnterStartAndEnd(newPageIndex > this.prevPageIndex);

    this.prevPageIndex = newPageIndex;
    return {
      value:
        outlet &&
        outlet.activatedRouteData &&
        outlet.activatedRouteData["index"],
      params
    };
  }

  /**
   * get start from and end to elements postions for page tranistions
   */
  getEnterStartAndEnd = prevPage =>
    prevPage ? { start: "100", end: "-100" } : { start: "-100", end: "100" };
}
