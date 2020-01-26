import { DataAccessService } from "./../../../services/data-access.service";
import { TableCol } from "./../../../types/types";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-three-main",
  templateUrl: "./nav-three-main.component.html",
  styleUrls: ["./nav-three-main.component.css"]
})
export class NavThreeMainComponent implements OnInit {
  constructor(private dataAccessService: DataAccessService) {}

  currentData: Array<{
    [key: string]: string | number;
  }>;
  tableCols: Array<TableCol> = [
    { Label: "Name", GridSize: 3, DataKey: "Name" },
    { Label: "Email", GridSize: 3, DataKey: "Email" },
    { Label: "Amount", GridSize: 3, DataKey: "Amount" }
  ];

  ngOnInit() {
    this.currentData = this.dataAccessService.getRegistrationData();
  }
  deleteRecent() {
    this.dataAccessService.deleteRecent();
    this.currentData = this.dataAccessService.getRegistrationData();
  }
  deleteAll() {
    this.dataAccessService.deleteAll();
    this.currentData = this.dataAccessService.getRegistrationData();
  }
}
