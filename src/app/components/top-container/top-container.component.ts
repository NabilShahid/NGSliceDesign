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
  updateSelectedHeadingTextWithAnimate(index){
    this.textChanging=true;
    setTimeout(() => {
      this.selectedHeadingText = CONTAINER_TEXTS[index];
      this.textChanging=false;
    }, 500);
   
  }
  ngOnInit() {}
}
