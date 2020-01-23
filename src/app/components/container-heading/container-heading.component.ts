import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container-heading',
  templateUrl: './container-heading.component.html',
  styleUrls: ['./container-heading.component.css']
})
export class ContainerHeadingComponent implements OnInit {

  constructor() { }
  @Input() headingText="";
  ngOnInit() {
  }

}
