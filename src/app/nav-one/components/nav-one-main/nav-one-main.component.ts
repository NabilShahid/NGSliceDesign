import { CARD_BENEFITS } from './../../../constants/common-consts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-one-main',
  templateUrl: './nav-one-main.component.html',
  styleUrls: ['./nav-one-main.component.css']
})
export class NavOneMainComponent implements OnInit {

  constructor() { }
  cardBenefitsList=CARD_BENEFITS;
  ngOnInit() {
  }

}