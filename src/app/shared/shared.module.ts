 import { UlListComponent } from '../shared/ul-list/ul-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [UlListComponent],
  imports: [
    CommonModule,
  ],
  exports:[UlListComponent]
})
export class SharedModule { }
