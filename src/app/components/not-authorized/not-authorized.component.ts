import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrls: ['./not-authorized.component.css']
})
export class NotAuthorizedComponent implements OnInit {

  constructor(private rtr:Router) { }

  ngOnInit() {
  }
  confirmAdminAndNavigate(){
    localStorage.setItem("IsAdmin","yes");
    this.rtr.navigate(['admin-panel']);
  }

}
