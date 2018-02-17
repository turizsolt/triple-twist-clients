import {EventEmitter, Injectable} from '@angular/core';
import {LocalStorage} from "angular-localstorage4";
import {Title} from "@angular/platform-browser";

@Injectable()
export class RoleService {
  // uncomment these in production
  //@LocalStorage("role")
    role:string = 'screen';
  //@LocalStorage("teamId")
    teamId:number = -1;
    roleUpdated: EventEmitter<void>;

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(this.getTitle());
    this.roleUpdated = new EventEmitter();
  }

  getRole() {
    return this.role;
  }

  getTeamId() {
    return this.teamId;
  }

  setRole(role:string, teamId?:number) {
    this.role = role;
    if(teamId !== undefined) this.teamId = teamId;
    this.titleService.setTitle(this.getTitle());
    this.roleUpdated.emit();
  }

  private getTitle() {
    return this.role +
      ( this.teamId !== -1
          ? (" #" + this.teamId)
          : ("")
      ) + " - TripleTwistClient";
  }

  getRoleAsPeerType() {
    switch(this.role) {
      case "server": return 0;
      case "host": return 1;
      case "team": return 2;
      case "screen": return 3;
      case "all": return 4;
      default: return -1;
    }
  }
}
