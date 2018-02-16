import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {CommunicationService} from "../../communication.service";

@Component({
  selector: 'app-game-picker-team',
  templateUrl: './game-picker-team.component.html',
  styleUrls: ['./game-picker-team.component.css']
})
export class GamePickerTeamComponent implements OnInit, OnDestroy {

  constructor(
    public communication:CommunicationService,
    public changeDetectorRef:ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.communication.subscribe("game-picker", (data) => {
      console.log("game-picker-team", data);
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.communication.unsubscribe("game-picker");
  }
}
