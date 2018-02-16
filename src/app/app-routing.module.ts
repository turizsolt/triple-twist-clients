import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RoleComponent} from "./role/role.component";
import {WelcomeHostComponent} from "./welcome/welcome-host/welcome-host.component";
import {WelcomeScreenComponent} from "./welcome/welcome-screen/welcome-screen.component";
import {WelcomeTeamComponent} from './welcome/welcome-team/welcome-team.component';
import {ButtonGameHostComponent} from "./button-game/button-game-host/button-game-host.component";
import {ButtonGameScreenComponent} from "./button-game/button-game-screen/button-game-screen.component";
import {ButtonGameTeamComponent} from "./button-game/button-game-team/button-game-team.component";
import {GamePickerHostComponent} from "./game-picker/game-picker-host/game-picker-host.component";
import {GamePickerScreenComponent} from "./game-picker/game-picker-screen/game-picker-screen.component";
import {GamePickerTeamComponent} from "./game-picker/game-picker-team/game-picker-team.component";
import {GamePickedHostComponent} from "./game-picked/game-picked-host/game-picked-host.component";
import {GamePickedScreenComponent} from "./game-picked/game-picked-screen/game-picked-screen.component";
import {GamePickedTeamComponent} from "./game-picked/game-picked-team/game-picked-team.component";

const routes: Routes = [
  //{ path: '', redirectTo: '/role', pathMatch: 'full' },
  { path: '', component: RoleComponent },

  { path:   'host/welcome', component: WelcomeHostComponent },
  { path: 'screen/welcome', component: WelcomeScreenComponent },
  { path:   'team/welcome', component: WelcomeTeamComponent },

  { path:   'host/button-game', component: ButtonGameHostComponent },
  { path: 'screen/button-game', component: ButtonGameScreenComponent },
  { path:   'team/button-game', component: ButtonGameTeamComponent },

  { path:   'host/game-picker', component: GamePickerHostComponent },
  { path: 'screen/game-picker', component: GamePickerScreenComponent },
  { path:   'team/game-picker', component: GamePickerTeamComponent },

  { path:   'host/game-picked', component: GamePickedHostComponent },
  { path: 'screen/game-picked', component: GamePickedScreenComponent },
  { path:   'team/game-picked', component: GamePickedTeamComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
