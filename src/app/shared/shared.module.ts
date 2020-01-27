import { DataListComponent } from "./../nav-three/components/data-list/data-list.component";
import { CurrencyDirective } from "./directives/currency.directive";
import { UlListComponent } from "./components/ul-list/ul-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThousandSepPipe } from "./pipes/thousand-sep.pipe";
import { LoadingComponent } from "./components/loading/loading.component";

@NgModule({
  declarations: [
    UlListComponent,
    CurrencyDirective,
    ThousandSepPipe,
    LoadingComponent,
    DataListComponent
  ],
  imports: [CommonModule],
  exports: [
    UlListComponent,
    CurrencyDirective,
    ThousandSepPipe,
    LoadingComponent,
    DataListComponent
  ]
})
export class SharedModule {}
