import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ButtonGameTeamComponent } from './button-game-team/button-game-team.component';
import { ButtonGameScreenComponent } from './button-game-screen/button-game-screen.component';
import { AppRoutingModule } from './/app-routing.module';
import {SocketIoService} from "./socket-io.service";
import {COMMUNICATION_SOCKET} from "./communication-socket";
import {CommunicationService} from "./communication.service";


@NgModule({
  declarations: [
    AppComponent,
    ButtonGameTeamComponent,
    ButtonGameScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CommunicationService,
    { provide: COMMUNICATION_SOCKET, useValue: new SocketIoService() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
