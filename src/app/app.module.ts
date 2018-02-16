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

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent
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
