import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-help',
  templateUrl: './register-help.component.html',
  styleUrls: ['./register-help.component.css']
})
export class RegisterHelpComponent implements OnInit {

  constructor(public rtr:Router,public activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

}
