import {Inject, Injectable} from '@angular/core';
import {COMMUNICATION_SOCKET, CommunicationSocket} from "./communication-socket";

@Injectable()
export class CommunicationService {

  constructor(@Inject(COMMUNICATION_SOCKET) private socket:CommunicationSocket) {
    this.socket.emit("login", {type: 1, teamId: 0});
    this.socket.on("loggedin", (data) => {
      console.log('received: ', data);
    });
  }

  subscribe(eventType:string, fn: (data: any) => void):void {
    this.socket.on(eventType, fn);
  }

  unsubscribe(eventType:string, fn: (data: any) => void):void {
    this.socket.removeListener(eventType);
  }

  emit(eventType:string, data:any) {
    this.socket.emit(eventType, data);
  }
}
