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

  onButtonGame() {
    this.communication.emit("message", {
      type: "state",
      event: "change",
      parameters: {changeTo: "button-game"}
    });
  }

  onPicker() {
    this.communication.emit("message", {
      type: "state",
      event: "change",
      parameters: {changeTo: "game-picker"}
    });
  }


}
