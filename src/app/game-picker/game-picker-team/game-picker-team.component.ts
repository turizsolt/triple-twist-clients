import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {CommunicationService} from "../../communication.service";
import {RoleService} from "../../role.service";
import {CardInfoService} from "../../card-info.service";

@Component({
  selector: 'app-game-picker-team',
  templateUrl: './game-picker-team.component.html',
  styleUrls: ['./game-picker-team.component.css']
})
export class GamePickerTeamComponent implements OnInit, OnDestroy {
  cards:any[];
  members:any[];
  memberChoose:number=1;
  weAreReady:boolean=false;
  countdown:string="00";

  constructor(
    public communication:CommunicationService,
    public changeDetectorRef:ChangeDetectorRef,
    public role:RoleService
  ) { }

  ngOnInit() {
    this.communication.subscribe("game-picker", this.onMessage);
  }

  private onInit (data) {
    console.log(data);
    let teamId = this.role.getTeamId();
    let myData = data.parameters.team[teamId];

    this.cards = myData.card.map(c => { return {
        type: c.type,
        used: c.used,
        symbol: CardInfoService.getSymbol(c.type),
        title: CardInfoService.getTitle(c.type)
    }; });
    console.log("cards, ",this.cards);
    this.members = myData.member;

    this.memberChoose = data.parameters.memberChoose;
    // TODO
  };

  ngOnDestroy(): void {
    this.communication.unsubscribe("game-picker");
  }

  onMember(i) {
    if(this.memberChoose == 0) return;
    //if(false) return; // if used or locked
    this.communication.emit("message", {
      type: "game-picker",
      event: "pick-member",
      parameters: {
        teamId: this.role.getTeamId(),
        memberId: this.members[i].id
      }
    });

    console.log("member", i);
  }

  onCard(i) {
    if(this.cards[i].used != 0) return;
    //if(false) return; // if used or locked
    this.communication.emit("message", {
      type: "game-picker",
      event: "pick-card",
      parameters: {
        teamId: this.role.getTeamId(),
        cardId: i,
        cardType: this.cards[i].type
      }
    });
    console.log("card", i);
  }

  onReady(i) {
    this.communication.emit("message", {
      type: "game-picker",
      event: "pick-ready",
      parameters: {
        teamId: this.role.getTeamId()
      }
    });
    console.log("ready");
  }

  onMessage = (data) => {
    switch(data.event) {
      case "picked-card":
        this.cards[data.parameters.cardId].locked = true;
        break;

      case "picked-member":
        let x = this.members.findIndex(m => m.id == data.parameters.memberId);
        this.members[x].locked = true;
        this.memberChoose--;
        break;

      case "picked-ready":
        this.weAreReady = true;
        break;

      case "counter":
        let sec = data.parameters.counter;
        this.countdown = (sec < 10 ? '0' : '') + sec;
        break;

      case "init":
        this.onInit(data);
        break;
    }

    console.log("game-picker-team", data);
    this.changeDetectorRef.detectChanges();
  };

}
