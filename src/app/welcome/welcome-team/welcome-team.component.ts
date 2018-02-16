import { Component, OnInit } from '@angular/core';
import {RoleService} from "../../role.service";

@Component({
  selector: 'app-welcome-team',
  templateUrl: './welcome-team.component.html',
  styleUrls: ['./welcome-team.component.css']
})
export class WelcomeTeamComponent implements OnInit {
  teamId:number=-1;

  constructor(
    public role:RoleService
  ) { }

  ngOnInit() {
    this.teamId = this.role.getTeamId();
  }

}
