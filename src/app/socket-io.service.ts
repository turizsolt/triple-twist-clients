import { Injectable } from '@angular/core';
import {CommunicationSocket} from "./communication-socket";
import { Socket } from 'ngx-socket-io';

@Injectable()
export class SocketIoService implements CommunicationSocket {

  private socket:Socket;

  constructor() {
    this.socket = new Socket({ url: 'http://localhost:8123', options: {} });
  }

  emit(messageType: string, data: any) {
    this.socket.emit(messageType, data);
  }

  on(messageType: string, fn: (data: any) => void) {
    this.socket.on(messageType, fn);
  }

  removeListener(eventType: string, fn?: Function) {
    this.socket.removeListener(eventType, fn);
  }

}
