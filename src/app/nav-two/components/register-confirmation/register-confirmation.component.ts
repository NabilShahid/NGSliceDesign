import { TransformService } from "./../../../services/transform.service";
import { Router } from "@angular/router";
import { DataAccessService } from "./../../../services/data-access.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register-confirmation",
  templateUrl: "./register-confirmation.component.html",
  styleUrls: ["./register-confirmation.component.css"]
})
export class RegisterConfirmationComponent implements OnInit {
  currentData: {
    [key: string]: string | number;
  };
  constructor(
    private dataAccessService: DataAccessService,
    private transformService: TransformService,
    private rtr: Router
  ) {}

  ngOnInit() {
    if (this.dataAccessService.hasData())
      this.currentData = this.dataAccessService.getCurrentData();
    else this.rtr.navigate(["navone"]);
  }
  saveData() {
    this.dataAccessService.updateDataValue(
      "Amount",
      this.transformService.currencyToNumber(this.currentData.Amount as string)
    );
    this.dataAccessService.submitData();
    this.rtr.navigate(["navthree"]);
  }
}
