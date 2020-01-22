import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavOneTestCompComponent } from "./components/nav-one-test-comp/nav-one-test-comp.component";

@NgModule({
  declarations: [NavOneTestCompComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NavOneTestCompComponent
      }
    ])
  ]
})
export class NavOneModule {}
