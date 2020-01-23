import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "navone",
    loadChildren: () =>
      import("./nav-one/nav-one.module").then(mod => mod.NavOneModule)
  },
  {
    path: "navtwo",
    loadChildren: () =>
      import("./nav-two/nav-two.module").then(mod => mod.NavTwoModule)
  },
  {
    path: "navthree",
    loadChildren: () =>
      import("./nav-three/nav-three.module").then(mod => mod.NavThreeModule)
  },
  { path: "**", redirectTo: "/navone", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
