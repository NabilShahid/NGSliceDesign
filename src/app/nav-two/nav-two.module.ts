import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTwoTestCompComponent } from './components/nav-two-test-comp/nav-two-test-comp.component';
import { NavTwoMainComponent } from './components/nav-two-main/nav-two-main.component';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterHelpComponent } from './components/register-help/register-help.component';
import { RegisterConfirmationComponent } from './components/register-confirmation/register-confirmation.component';



@NgModule({
  declarations: [NavTwoTestCompComponent, NavTwoMainComponent, RegisterFormComponent, RegisterHelpComponent, RegisterConfirmationComponent],
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
