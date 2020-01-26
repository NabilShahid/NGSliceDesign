import { CurrencyDirective } from './directives/currency.directive';
 import { UlListComponent } from './components/ul-list/ul-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [UlListComponent,CurrencyDirective],
  imports: [
    CommonModule,
  ],
  exports:[UlListComponent,CurrencyDirective]
})
export class SharedModule { }
