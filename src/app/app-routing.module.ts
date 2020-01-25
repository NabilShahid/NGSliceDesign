import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//index in params device route navigation index of page for identifying animation directions
const routes: Routes = [
  {
    path: "navone",
    data: { index: 1 },
    loadChildren: () =>
      import("./nav-one/nav-one.module").then(mod => mod.NavOneModule)
  },
  {
    path: "navtwo",
    data: { index: 2 },
    loadChildren: () =>
      import("./nav-two/nav-two.module").then(mod => mod.NavTwoModule)
  },
  {
    path: "navthree",
    data: { index: 3 },
    loadChildren: () =>
      import("./nav-three/nav-three.module").then(mod => mod.NavThreeModule)
  },
  {
    path: "admin-panel",
    component:AdminPanelComponent
  },
  { path: "**", redirectTo: "/navone", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
