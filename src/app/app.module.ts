import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    WelcomeScreenComponent,
    WelcomeTeamComponent,
    WelcomeHostComponent,
    ButtonGameHostComponent,
    ButtonGameScreenComponent,
    ButtonGameTeamComponent
  ],
  imports: [
    BrowserModule,
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
