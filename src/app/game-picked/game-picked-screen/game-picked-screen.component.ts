import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommunicationService} from "../../communication.service";
import {CardInfoService} from "../../card-info.service";
import {RoleService} from "../../role.service";

@Component({
  selector: 'app-game-picked-screen',
  templateUrl: './game-picked-screen.component.html',
  styleUrls: ['./game-picked-screen.component.css']
})
export class GamePickedScreenComponent implements OnInit {
  teams:any[];

  constructor(
    public communication:CommunicationService,
    public changeDetectorRef:ChangeDetectorRef,
    private role:RoleService
  ) { }

  ngOnInit() {
    this.communication.subscribe("game-picked", this.onMessage);
    /*this.communication.emit("message", {
      type: "game-picked",
      event: "re-init",
      parameters: {}
    });*/
  }

  ngOnDestroy(): void {
    this.communication.unsubscribe("game-picked");
  }

  private onInit(data) {
    console.log("onInit", data);
    this.teams = data.parameters.result.map((team) => {
      return {
        members: team.member,
        cards: team.card
          .filter(c => c.processResult == 0)
          .map((c) => {
          return {
            type: c.card.type,
            title: CardInfoService.getTitle(c.card.type),
            symbol: CardInfoService.getSymbol(c.card.type)
          };
        })
    };});
    console.log("after onInit", this.teams);
  }

  onMessage = (data) => {
    console.log("onMessage", data);
    switch(data.event) {
      case "init":
        this.onInit(data);
        break;
    }

    console.log("game-picked-team", data);
    this.changeDetectorRef.detectChanges();
  };
}
