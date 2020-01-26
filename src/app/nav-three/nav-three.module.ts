import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavThreeMainComponent } from './components/nav-three-main/nav-three-main.component';
import { RouterModule } from '@angular/router';
import { DataListComponent } from './components/data-list/data-list.component';



@NgModule({
  declarations: [NavThreeMainComponent, DataListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NavThreeMainComponent
      }
    ])
  ]
})
export class NavThreeModule { }
