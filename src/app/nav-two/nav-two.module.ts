import { SharedModule } from './../shared/shared.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavTwoTestCompComponent } from "./components/nav-two-test-comp/nav-two-test-comp.component";
import { NavTwoMainComponent } from "./components/nav-two-main/nav-two-main.component";
import { RouterModule } from "@angular/router";
import { RegisterFormComponent } from "./components/register-form/register-form.component";
import { RegisterHelpComponent } from "./components/register-help/register-help.component";
import { RegisterConfirmationComponent } from "./components/register-confirmation/register-confirmation.component";
import { RegisterInstructionsComponent } from './components/register-instructions/register-instructions.component';

@NgModule({
  declarations: [
    NavTwoTestCompComponent,
    NavTwoMainComponent,
    RegisterFormComponent,
    RegisterHelpComponent,
    RegisterConfirmationComponent,
    RegisterInstructionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: NavTwoMainComponent,
        children: [
          { path: "register", data:{index:1}, component: RegisterFormComponent },
          { path: "register-instructions", data:{index:2}, component: RegisterInstructionsComponent },
          { path: "register-confirm", data:{index:3}, component: RegisterConfirmationComponent },
          { path: "**", redirectTo: "register", pathMatch: "full" }
        ]
      }
    ])
  ]
})
export class NavTwoModule {}
