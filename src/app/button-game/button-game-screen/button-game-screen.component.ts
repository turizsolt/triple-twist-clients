import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {CommunicationService} from "../../communication.service";

@Component({
  selector: 'app-button-game-screen',
  templateUrl: './button-game-screen.component.html',
  styleUrls: ['./button-game-screen.component.css']
})
export class ButtonGameScreenComponent implements OnInit, OnDestroy {
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

}
