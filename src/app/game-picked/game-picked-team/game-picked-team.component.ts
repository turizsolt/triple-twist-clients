import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommunicationService} from "../../communication.service";
import {RoleService} from "../../role.service";
import {CardInfoService} from "../../card-info.service";

@Component({
  selector: 'app-game-picked-team',
  templateUrl: './game-picked-team.component.html',
  styleUrls: ['./game-picked-team.component.css']
})
export class GamePickedTeamComponent implements OnInit {
  cards:any[];

  constructor(
    public communication:CommunicationService,
    public changeDetectorRef:ChangeDetectorRef,
    private role:RoleService
  ) { }

  ngOnInit() {
    this.communication.subscribe("game-picked", this.onMessage);
  }

  ngOnDestroy(): void {
    this.communication.unsubscribe("game-picked");
  }

  private onInit(data) {
    this.cards = data.parameters.result[this.role.getTeamId()].card
      .map( (c) => {
        return {
          type: c.card.type,
          title: CardInfoService.getTitle(c.card.type),
          symbol: CardInfoService.getSymbol(c.card.type),
          feedback: c.processResult == 0 ? 'accepted' : 'refused',
          reason: CardInfoService.getReason(c.processResult)

        }
      });
    console.log(this.cards);
  }

  onMessage = (data) => {
    switch(data.event) {
      case "init":
        this.onInit(data);
        break;
    }

    console.log("game-picked-team", data);
    this.changeDetectorRef.detectChanges();
  };
}
