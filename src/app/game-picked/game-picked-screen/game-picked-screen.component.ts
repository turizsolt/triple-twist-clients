import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommunicationService} from "../../communication.service";

@Component({
  selector: 'app-game-picked-screen',
  templateUrl: './game-picked-screen.component.html',
  styleUrls: ['./game-picked-screen.component.css']
})
export class GamePickedScreenComponent implements OnInit {

  constructor(
    public communication:CommunicationService,
    public changeDetectorRef:ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.communication.subscribe("game-picked", (data) => {
      console.log("game-picked-screen", data);
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.communication.unsubscribe("game-picked");
  }
}
