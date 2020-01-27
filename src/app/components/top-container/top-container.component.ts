import { ActivatedRoute, Router } from "@angular/router";
import { CONTAINER_TEXTS } from "./../../constants/common-consts";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-top-container",
  templateUrl: "./top-container.component.html",
  styleUrls: ["./top-container.component.css"]
})
export class TopContainerComponent implements OnInit {
  constructor() {}
  selectedHeadingText: string;
  textChanging: boolean = false;
  /**
   * Fades heading, updates it and the shows for fade effect
   * @param navlink of text to show from route
   */
  updateSelectedHeadingTextWithAnimate(navlink) {
    this.textChanging = true;
    setTimeout(() => {
      this.selectedHeadingText = CONTAINER_TEXTS[navlink || "navone"];
      this.textChanging = false;
    }, 500);
  }
  ngOnInit(){}
}
