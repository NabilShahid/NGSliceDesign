import { TableCol } from "./../../../types/types";
import { Component, OnInit, Input, SimpleChange, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-data-list",
  templateUrl: "./data-list.component.html",
  styleUrls: ["./data-list.component.css"]
})
export class DataListComponent implements OnInit {
  constructor() {}
  @Input() cols: Array<TableCol> = [];
  @Input() data: Array<any> = [];
  footerValues: { [key: string]: string }={};
  ngOnChanges(){
     this.calculateFooterValues();
  }
  ngOnInit() {
  }
  calculateFooterValues() {
    this.footerValues = this.cols.reduce((prev, curr) => {
      if (curr.Footer == "sum") {
        prev[curr.DataKey] = this.data.reduce((p, c) => {
          return p+c[curr.DataKey];
        },0);
        if(!prev[curr.DataKey])prev[curr.DataKey]=0;
      }
      return prev;
    }, {});
  }
}
