import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RoleComponent} from "./role/role.component";
import {WelcomeHostComponent} from "./welcome/welcome-host/welcome-host.component";
import {WelcomeScreenComponent} from "./welcome/welcome-screen/welcome-screen.component";
import {WelcomeTeamComponent} from './welcome/welcome-team/welcome-team.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/role', pathMatch: 'full' },
  { path: '', component: RoleComponent },
  { path: 'host/welcome', component: WelcomeHostComponent },
  { path: 'screen/welcome', component: WelcomeScreenComponent },
  { path: 'team/welcome', component: WelcomeTeamComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
