import { Injectable } from '@angular/core';
import {LocalStorage} from "angular-localstorage4";

@Injectable()
export class RoleService {
  //@LocalStorage("role")
    role:string = 'screen';
  //@LocalStorage("teamId")
    teamId:number = -1;

  constructor() { }

  getRole() {
    return this.role;
  }

  getTeamId() {
    return this.teamId;
  }

  setRole(role:string, teamId?:number) {
    this.role = role;
    if(teamId) this.teamId = teamId;
  }
}
