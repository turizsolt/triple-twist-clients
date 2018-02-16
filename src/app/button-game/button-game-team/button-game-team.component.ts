import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {CommunicationService} from "../../communication.service";

@Component({
  selector: 'app-button-game-team',
  templateUrl: './button-game-team.component.html',
  styleUrls: ['./button-game-team.component.css']
})
export class ButtonGameTeamComponent implements OnInit, OnDestroy {
  counter:number=-1;

  constructor(
    public communication:CommunicationService,
    public changeDetectorRef:ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.communication.subscribe("button-game", (data) => {
      this.counter = data.parameters.counter;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.communication.unsubscribe("button-game");
  }

  increment() {
    this.communication.emit("message", {
      type: "button-game",
      event: "increment",
      parameters: {}
    });
  }
}
