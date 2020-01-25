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
  prevPageIndex = 0;
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
