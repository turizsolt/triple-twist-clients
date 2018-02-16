import { Component, OnInit } from '@angular/core';
import {RoleService} from "../role.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(
    public role:RoleService,
    public router:Router
  ) { }

  ngOnInit() {
  }

  selectRole(role:string, teamId?:number) {
    this.role.setRole(role, teamId);
    this.router.navigateByUrl('/' + role + '/welcome' );
  }

}
