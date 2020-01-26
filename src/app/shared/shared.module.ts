import { CurrencyDirective } from './directives/currency.directive';
 import { UlListComponent } from './components/ul-list/ul-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThousandSepPipe } from './pipes/thousand-sep.pipe';



@NgModule({
  declarations: [UlListComponent,CurrencyDirective, ThousandSepPipe],
  imports: [
    CommonModule,
  ],
  exports:[UlListComponent,CurrencyDirective,ThousandSepPipe]
})
export class SharedModule { }
