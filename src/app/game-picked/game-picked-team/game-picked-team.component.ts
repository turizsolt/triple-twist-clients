import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommunicationService} from "../../communication.service";

@Component({
  selector: 'app-game-picked-team',
  templateUrl: './game-picked-team.component.html',
  styleUrls: ['./game-picked-team.component.css']
})
export class GamePickedTeamComponent implements OnInit {

  constructor(
    public communication:CommunicationService,
    public changeDetectorRef:ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.communication.subscribe("game-picked", (data) => {
      console.log("game-picked-team", data);
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.communication.unsubscribe("game-picked");
  }
}
