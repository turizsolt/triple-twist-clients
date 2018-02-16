import {ChangeDetectorRef, Component, NgModule, OnDestroy, OnInit} from '@angular/core';
import {CommunicationService} from "./communication.service";
import {Router} from "@angular/router";
import {RoleService} from "./role.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';


  constructor(public communication:CommunicationService,
              public cdr:ChangeDetectorRef,
              public router:Router,
              public role:RoleService) {

  }

  ngOnInit() {
    this.communication.subscribe("message", (data) => {
      console.log(data);
      this.router.navigateByUrl('/' + this.role.getRole() + '/' + data.parameters.changeTo );
    });
  }

  ngOnDestroy() {

  }

}
