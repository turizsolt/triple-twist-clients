import { Injectable } from '@angular/core';
import {LocalStorage} from "angular-localstorage4";
import {Title} from "@angular/platform-browser";

@Injectable()
export class RoleService {
  // uncomment these in production
  //@LocalStorage("role")
    role:string = 'screen';
  //@LocalStorage("teamId")
    teamId:number = -1;

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.getTitle());
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
  }

  private getTitle() {
    return this.role +
      ( this.teamId !== -1
          ? (" #" + this.teamId)
          : ("")
      ) + " - TripleTwistClient";
  }
}
