import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ButtonGameScreenComponent} from "./button-game-screen/button-game-screen.component";
import {ButtonGameTeamComponent} from "./button-game-team/button-game-team.component";
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
