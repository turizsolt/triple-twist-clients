import { Component, OnInit } from '@angular/core';
import {CommunicationService} from "../communication.service";

@Component({
  selector: 'app-button-game-team',
  templateUrl: './button-game-team.component.html',
  styleUrls: ['./button-game-team.component.css']
})
export class ButtonGameTeamComponent implements OnInit {

  constructor(public communication:CommunicationService) {

  }

  ngOnInit() {
  }

  onClick() {

  }
}
