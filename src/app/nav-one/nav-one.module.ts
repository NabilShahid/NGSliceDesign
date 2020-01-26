import { SharedModule } from './../shared/shared.module';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavOneMainComponent } from './components/nav-one-main/nav-one-main.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [NavOneMainComponent],
  imports: [
    CommonModule,
    SharedModule,
    RatingModule,
    FormsModule,
    PaginationModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: NavOneMainComponent
      }
    ])
  ]
})
export class NavOneModule {}
