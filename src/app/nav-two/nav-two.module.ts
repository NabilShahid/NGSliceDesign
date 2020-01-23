import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTwoTestCompComponent } from './components/nav-two-test-comp/nav-two-test-comp.component';
import { NavTwoMainComponent } from './components/nav-two-main/nav-two-main.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavTwoTestCompComponent, NavTwoMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NavTwoMainComponent
      }
    ])
  ]
})
export class NavTwoModule { }
