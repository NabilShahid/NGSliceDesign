import { CommunicationService } from './../../../services/communication.service';
import { Router } from '@angular/router';
import { DataAccessService } from "./../../../services/data-access.service";
import { TableCol } from "./../../../types/types";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-three-main",
  templateUrl: "./nav-three-main.component.html",
  styleUrls: ["./nav-three-main.component.css"]
})
export class NavThreeMainComponent implements OnInit {
  constructor(private dataAccessService: DataAccessService,private rtr:Router,private communicationService:CommunicationService) {}
  loading = true;
  currentData: Array<{
    [key: string]: string | number;
  }>=[];//data to pass in data list
  tableCols: Array<TableCol> = [
    { Label: "Name", GridSize: 3, DataKey: "Name", Align: "left" },
    { Label: "Email", GridSize: 3, DataKey: "Email", Align: "left" },
    {
      Label: "Amount",
      GridSize: 3,
      DataKey: "Amount",
      Footer: "sum",
      FooterLabel: "Total",
      Align: "right"
    }
  ];//col options

  async ngOnInit() {
    this.loading = true;
    this.currentData = await this.dataAccessService.getRegistrationData();
    this.loading = false;
  }
  async deleteRecent() {
    this.dataAccessService.deleteRecent();
    this.loading=true;
    this.currentData = await this.dataAccessService.getRegistrationData();
    this.loading=false;
  }
  async deleteAll() {
    this.dataAccessService.deleteAll();
    this.loading=true;
    this.currentData = await this.dataAccessService.getRegistrationData();
    this.loading=false;
  }
  navigateToRegistration(){
    this.communicationService.navlinkUpdatedFromChild.next("navtwo");
    this.rtr.navigate(['navtwo']);
  }
}
