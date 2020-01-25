import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { TopContainerComponent } from "./components/top-container/top-container.component";
import { AdminPanelComponent } from "./components/admin-panel/admin-panel.component";
import { NotAuthorizedComponent } from "./components/not-authorized/not-authorized.component";
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TopContainerComponent,
    AdminPanelComponent,
    NotAuthorizedComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
