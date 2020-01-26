import { ActivatedRoute } from "@angular/router";
import { CONTAINER_TEXTS } from "./../../constants/common-consts";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-top-container",
  templateUrl: "./top-container.component.html",
  styleUrls: ["./top-container.component.css"]
})
export class TopContainerComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    
  }
  selectedHeadingText: string;
  updateSelectedHeadingText = index =>
    (this.selectedHeadingText = CONTAINER_TEXTS[index]);
  ngOnInit() {
    this.selectedHeadingText =
      CONTAINER_TEXTS[this.activatedRoute.root.firstChild.snapshot.data.index];
  }
}
