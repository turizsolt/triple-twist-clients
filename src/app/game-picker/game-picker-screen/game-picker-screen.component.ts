import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommunicationService} from "../../communication.service";

@Component({
  selector: 'app-game-picker-screen',
  templateUrl: './game-picker-screen.component.html',
  styleUrls: ['./game-picker-screen.component.css']
})
export class GamePickerScreenComponent implements OnInit {
  countdown:string="30";

  constructor(
    public communication:CommunicationService,
    public changeDetectorRef:ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.communication.subscribe("game-picker", this.onMessage);
  }

  ngOnDestroy(): void {
    this.communication.unsubscribe("game-picker");
  }

  onMessage = (data) => {
    switch(data.event) {
      case "counter":
        let sec = data.parameters.counter;
        this.countdown = (sec < 10 ? '0' : '') + sec;
        break;
    }

    console.log("game-picker-team", data);
    this.changeDetectorRef.detectChanges();
  };
}

