import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RoleComponent} from "./role/role.component";
import {WelcomeHostComponent} from "./welcome/welcome-host/welcome-host.component";
import {WelcomeScreenComponent} from "./welcome/welcome-screen/welcome-screen.component";
import {WelcomeTeamComponent} from './welcome/welcome-team/welcome-team.component';
import {ButtonGameHostComponent} from "./button-game/button-game-host/button-game-host.component";
import {ButtonGameScreenComponent} from "./button-game/button-game-screen/button-game-screen.component";
import {ButtonGameTeamComponent} from "./button-game/button-game-team/button-game-team.component";

const routes: Routes = [
  //{ path: '', redirectTo: '/role', pathMatch: 'full' },
  { path: '', component: RoleComponent },
  { path:   'host/welcome', component: WelcomeHostComponent },
  { path: 'screen/welcome', component: WelcomeScreenComponent },
  { path:   'team/welcome', component: WelcomeTeamComponent },
  { path:   'host/button-game', component: ButtonGameHostComponent },
  { path: 'screen/button-game', component: ButtonGameScreenComponent },
  { path:   'team/button-game', component: ButtonGameTeamComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
