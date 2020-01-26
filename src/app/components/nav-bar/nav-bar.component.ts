import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  constructor() {}
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
  emitCurrentRouteLinkIndex() {
    this.navIndexChange.emit(
      this.navLinks.findIndex(
        r => r.RoutePath === location.pathname.split("/")[1]
      )
    );
    location.pathname.split("/")[1];
  }
}
