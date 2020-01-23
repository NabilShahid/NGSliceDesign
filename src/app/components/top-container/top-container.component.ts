import { CONTAINER_TEXTS } from "./../../constants/common-consts";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-top-container",
  templateUrl: "./top-container.component.html",
  styleUrls: ["./top-container.component.css"]
})
export class TopContainerComponent implements OnInit {
  constructor() {}
  selectedHeadingText = CONTAINER_TEXTS[0];
  updateSelectedHeadingText = index =>
    (this.selectedHeadingText = CONTAINER_TEXTS[index]);
  ngOnInit() {}
}
