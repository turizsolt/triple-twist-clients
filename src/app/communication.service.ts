import {Inject, Injectable} from '@angular/core';
import {COMMUNICATION_SOCKET, CommunicationSocket} from "./communication-socket";
import {RoleService} from "./role.service";

@Injectable()
export class CommunicationService {

  constructor(
    @Inject(COMMUNICATION_SOCKET) private socket:CommunicationSocket,
    private role:RoleService) {
    this.socket.emit("login", {
      type: this.role.getRoleAsPeerType(),
      teamId: this.role.getTeamId()
    });
    this.socket.on("loggedin", (data) => {
      console.log('loggedin: ', data);
    });
    this.role.roleUpdated.subscribe(()=>{
      console.log("role updated");
      this.updateRole();
    })
  }

  updateRole() {
    this.socket.emit("update-login", {
      type: this.role.getRoleAsPeerType(),
      teamId: this.role.getTeamId()
    });
    this.socket.on("updated-login", (data) => {
      console.log('updated login: ', data);
    });
  }

  subscribe(eventType:string, fn: (data: any) => void):void {
    this.socket.on(eventType, fn);
  }

  unsubscribe(eventType:string):void {
    this.socket.removeListener(eventType);
  }

  emit(eventType:string, data:any) {
    this.socket.emit(eventType, data);
  }
}
