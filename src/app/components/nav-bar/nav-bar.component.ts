import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  constructor() {}
  //emits when nav item click
  @Output() navIndexChange = new EventEmitter();
  readonly navLinks = [
    {
      LargeText: "Navigation Link 1",
      SmallText: "Link 1",
      RoutePath: "navone"
    },
    {
      LargeText: "Navigation Link 2",
      SmallText: "Link 2",
      RoutePath: "navtwo"
    },
    {
      LargeText: "Navigation Link 3",
      SmallText: "Link 3",
      RoutePath: "navthree"
    }
  ];
  ngOnInit() {
    this.emitCurrentRouteLinkIndex();
  }
  /**
   * emits initial route on load from location
   */
  emitCurrentRouteLinkIndex() {
    this.navIndexChange.emit(location.pathname.split("/")[1]);
  }
}
