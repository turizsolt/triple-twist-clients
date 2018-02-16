import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommunicationService} from "../../communication.service";

@Component({
  selector: 'app-game-picker-screen',
  templateUrl: './game-picker-screen.component.html',
  styleUrls: ['./game-picker-screen.component.css']
})
export class GamePickerScreenComponent implements OnInit {

  constructor(
    public communication:CommunicationService,
    public changeDetectorRef:ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.communication.subscribe("game-picker", (data) => {
      console.log("game-picker-screen", data);
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.communication.unsubscribe("game-picker");
  }
}

