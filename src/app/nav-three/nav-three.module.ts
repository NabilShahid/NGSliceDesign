import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavThreeMainComponent } from './components/nav-three-main/nav-three-main.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavThreeMainComponent],
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
