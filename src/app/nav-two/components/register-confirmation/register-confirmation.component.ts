import { Router } from '@angular/router';
import { DataAccessService } from "./../../../services/data-access.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register-confirmation",
  templateUrl: "./register-confirmation.component.html",
  styleUrls: ["./register-confirmation.component.css"]
})
export class RegisterConfirmationComponent implements OnInit {
  currentData: {
    [key: string]: string;
  };
  constructor(private dataAccessService: DataAccessService,private rtr:Router) {}

  ngOnInit() {
    if(this.dataAccessService.hasData())
    this.currentData = this.dataAccessService.getCurrentData();
    else this.rtr.navigate(["navone"])
  }
  saveData() {
    this.dataAccessService.submitData();
    this.rtr.navigate(["navthree"]);
  }
}
