import { TableCol } from './../../../types/types';
import { CARD_BENEFITS, RATE_LIST } from "./../../../constants/common-consts";
import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: "app-nav-one-main",
  templateUrl: "./nav-one-main.component.html",
  styleUrls: ["./nav-one-main.component.css"]
})
export class NavOneMainComponent implements OnInit {
  rating = 4; //rating start binding
  reviewCount = 3252; //review counting binding
  modalRef: BsModalRef;
  tableCols: Array<TableCol> = [
    { Label: "Item", GridSize: 6, DataKey: "Item", Align: "left" },
    { Label: "Rate", GridSize: 6, DataKey: "Rate", Align: "left" }
   
  ];
  rateList=RATE_LIST;
  constructor(private modalService: BsModalService) {}
  cardBenefitsList = CARD_BENEFITS;
  ngOnInit() {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
