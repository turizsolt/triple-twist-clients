import { Component, OnInit } from '@angular/core';
import {CommunicationService} from "../../communication.service";

@Component({
  selector: 'app-button-game-host',
  templateUrl: './button-game-host.component.html',
  styleUrls: ['./button-game-host.component.css']
})
export class ButtonGameHostComponent implements OnInit {

  constructor(
    public communication:CommunicationService
  ) { }

  ngOnInit() {
  }

  onNext() {
    this.communication.emit("message", {
      type: "state",
      event: "change",
      parameters: {changeTo: "welcome"}
    });
  }
}
