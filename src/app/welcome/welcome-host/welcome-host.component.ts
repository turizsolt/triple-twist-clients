import { Component, OnInit } from '@angular/core';
import {CommunicationService} from "../../communication.service";

@Component({
  selector: 'app-welcome-host',
  templateUrl: './welcome-host.component.html',
  styleUrls: ['./welcome-host.component.css']
})
export class WelcomeHostComponent implements OnInit {

  constructor(
    public communication:CommunicationService
  ) { }

  ngOnInit() {
  }

  onNext() {
    this.communication.emit("message", {
      type: "state",
      event: "change",
      parameters: {changeTo: "button-game"}
    });
  }

}
