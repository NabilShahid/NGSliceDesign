import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavOneMainComponent } from './components/nav-one-main/nav-one-main.component';

@NgModule({
  declarations: [NavOneMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NavOneMainComponent
      }
    ])
  ]
})
export class NavOneModule {}
