import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import {SocketIoService} from "./socket-io.service";
import {COMMUNICATION_SOCKET} from "./communication-socket";
import {CommunicationService} from "./communication.service";
import {WebStorageModule, LocalStorageService} from "angular-localstorage4";
import { RoleComponent } from './role/role.component';
import {RoleService} from "./role.service";
import { WelcomeScreenComponent } from './welcome/welcome-screen/welcome-screen.component';
import { WelcomeTeamComponent } from './welcome/welcome-team/welcome-team.component';
import { WelcomeHostComponent } from './welcome/welcome-host/welcome-host.component';
import { ButtonGameHostComponent } from './button-game/button-game-host/button-game-host.component';
import { ButtonGameScreenComponent } from './button-game/button-game-screen/button-game-screen.component';
import { ButtonGameTeamComponent } from './button-game/button-game-team/button-game-team.component';
import { GamePickerHostComponent } from './game-picker/game-picker-host/game-picker-host.component';
import { GamePickerScreenComponent } from './game-picker/game-picker-screen/game-picker-screen.component';
import { GamePickerTeamComponent } from './game-picker/game-picker-team/game-picker-team.component';
import { GamePickedHostComponent } from './game-picked/game-picked-host/game-picked-host.component';
import { GamePickedScreenComponent } from './game-picked/game-picked-screen/game-picked-screen.component';
import { GamePickedTeamComponent } from './game-picked/game-picked-team/game-picked-team.component';

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    WelcomeScreenComponent,
    WelcomeTeamComponent,
    WelcomeHostComponent,
    ButtonGameHostComponent,
    ButtonGameScreenComponent,
    ButtonGameTeamComponent,
    GamePickerHostComponent,
    GamePickerScreenComponent,
    GamePickerTeamComponent,
    GamePickedHostComponent,
    GamePickedScreenComponent,
    GamePickedTeamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WebStorageModule
  ],
  providers: [
    CommunicationService,
    { provide: COMMUNICATION_SOCKET, useValue: new SocketIoService() },
    LocalStorageService,
    RoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
