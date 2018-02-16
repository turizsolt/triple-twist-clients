import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RoleComponent} from "./role/role.component";

const routes: Routes = [
  //{ path: '', redirectTo: '/screen', pathMatch: 'full' },
  { path: '', component: RoleComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
