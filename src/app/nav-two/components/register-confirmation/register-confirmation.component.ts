import { CommunicationService } from "./../../../services/communication.service";
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
  } = {};
  loading = false;
  constructor(
    private dataAccessService: DataAccessService,
    private transformService: TransformService,
    private rtr: Router,
    private communicationService: CommunicationService
  ) {}

  ngOnInit() {
    if (this.dataAccessService.hasData())
      this.currentData = this.dataAccessService.getCurrentData();
    else {
      this.communicationService.navlinkUpdatedFromChild.next("navone");
      this.rtr.navigate(["navone"]);
    } //if not data i.e. route opened directly
  }

  /**
   * save current data to data list
   */
  async saveData() {
    this.loading = true;
    this.dataAccessService.updateDataValue(
      "Amount",
      this.transformService.currencyToNumber(this.currentData.Amount as string)
    );
    await this.dataAccessService.submitData();
    this.loading = false;
    this.communicationService.navlinkUpdatedFromChild.next("navthree");
    this.rtr.navigate(["navthree"]);
  }
}
