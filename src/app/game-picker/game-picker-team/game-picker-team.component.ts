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

  constructor(
    public communication:CommunicationService,
    public changeDetectorRef:ChangeDetectorRef,
    public role:RoleService
  ) { }

  ngOnInit() {
    this.communication.subscribe("game-picker", (data) => {
      console.log("game-picker-team", data);
      this.changeDetectorRef.detectChanges();
    });

    const inp = `{"event":"init","parameters":{"team":[{"id":0,"name":"Kék","color":"blue","pointToAdd":0,"point":0,"member":[{"id":0,"name":"Andrew","pic":"blue.moon.jpg","col":"black","left":4,"locked":false,"used":0},{"id":1,"name":"Bill","pic":"blue.fish.jpg","col":"black","left":3,"locked":false,"used":0},{"id":2,"name":"Charlie","pic":"blue.pound.jpg","col":"black","left":4,"locked":false,"used":0},{"id":3,"name":"Charlie","pic":"green.eyes.jpg","col":"black","left":4,"locked":false,"used":0},{"id":4,"name":"Charlie","pic":"green.field.jpg","col":"black","left":4,"locked":false,"used":0},{"id":5,"name":"Charlie","pic":"green.train.jpg","col":"black","left":4,"locked":false,"used":0},{"id":6,"name":"Charlie","pic":"purple.car.jpg","col":"black","left":4,"locked":false,"used":0},{"id":7,"name":"Charlie","pic":"purple.sky.jpg","col":"black","left":4,"locked":false,"used":0}],"card":[{"type":0,"used":0},{"type":0,"used":0},{"type":1,"used":0},{"type":7,"used":0},{"type":4,"used":0},{"type":2,"used":0},{"type":6,"used":0},{"type":5,"used":0},{"type":3,"used":0},{"type":9,"used":0},{"type":9,"used":0}],"anytimeCard":[{"type":10,"used":0},{"type":10,"used":0},{"type":11,"used":0},{"type":12,"used":0}]},{"id":1,"name":"Zöld","color":"green","pointToAdd":0,"point":0,"member":[{"id":10,"name":"Dave","pic":"green.eyes.jpg","col":"black","left":4,"locked":false,"used":0},{"id":11,"name":"Eve","pic":"green.field.jpg","col":"black","left":3,"locked":false,"used":0},{"id":12,"name":"Francisco","pic":"green.train.jpg","col":"black","left":4,"locked":false,"used":0}],"card":[{"type":0,"used":0},{"type":0,"used":0},{"type":1,"used":0},{"type":7,"used":0},{"type":4,"used":0},{"type":2,"used":0},{"type":6,"used":0},{"type":5,"used":0},{"type":3,"used":0},{"type":9,"used":0},{"type":9,"used":0}],"anytimeCard":[{"type":10,"used":0},{"type":10,"used":0},{"type":11,"used":0},{"type":12,"used":0}]},{"id":2,"name":"Lila","color":"purple","pointToAdd":0,"point":0,"member":[{"id":20,"name":"George","pic":"purple.car.jpg","col":"black","left":4,"locked":false,"used":0},{"id":21,"name":"Hillary","pic":"purple.flower.jpg","col":"black","left":3,"locked":false,"used":0},{"id":22,"name":"Ivon","pic":"purple.sky.jpg","col":"black","left":4,"locked":false,"used":0}],"card":[{"type":0,"used":0},{"type":0,"used":0},{"type":1,"used":0},{"type":7,"used":0},{"type":4,"used":0},{"type":2,"used":0},{"type":6,"used":0},{"type":5,"used":0},{"type":3,"used":0},{"type":9,"used":0},{"type":9,"used":0}],"anytimeCard":[{"type":10,"used":0},{"type":10,"used":0},{"type":11,"used":0},{"type":12,"used":0}]},{"id":3,"name":"Arany","color":"golden","pointToAdd":0,"point":0,"member":[{"id":30,"name":"George","pic":"purple.car.jpg","col":"black","left":4,"locked":false,"used":0},{"id":31,"name":"Hillary","pic":"purple.flower.jpg","col":"black","left":3,"locked":false,"used":0},{"id":32,"name":"Ivon","pic":"purple.sky.jpg","col":"black","left":4,"locked":false,"used":0}],"card":[{"type":0,"used":0},{"type":0,"used":0},{"type":1,"used":0},{"type":7,"used":0},{"type":4,"used":0},{"type":2,"used":0},{"type":6,"used":0},{"type":5,"used":0},{"type":3,"used":0},{"type":9,"used":0},{"type":9,"used":0}],"anytimeCard":[{"type":10,"used":0},{"type":10,"used":0},{"type":11,"used":0},{"type":12,"used":0}]},{"id":4,"name":"Lazac","color":"salmon","pointToAdd":0,"point":0,"member":[{"id":40,"name":"George","pic":"purple.car.jpg","col":"black","left":3,"locked":false,"used":0},{"id":41,"name":"Hillary","pic":"purple.flower.jpg","col":"black","left":4,"locked":false,"used":0},{"id":42,"name":"Ivon","pic":"purple.sky.jpg","col":"black","left":4,"locked":false,"used":0}],"card":[{"type":0,"used":0},{"type":0,"used":0},{"type":1,"used":0},{"type":7,"used":0},{"type":4,"used":0},{"type":2,"used":0},{"type":6,"used":0},{"type":5,"used":0},{"type":3,"used":0},{"type":9,"used":0},{"type":9,"used":0}],"anytimeCard":[{"type":10,"used":0},{"type":10,"used":0},{"type":11,"used":0},{"type":12,"used":0}]}],"result":[{"point":0,"pointToAdd":0,"member":[],"card":[]},{"point":0,"pointToAdd":0,"member":[],"card":[]},{"point":0,"pointToAdd":0,"member":[],"card":[]},{"point":0,"pointToAdd":0,"member":[],"card":[]},{"point":0,"pointToAdd":0,"member":[],"card":[]}],"memberChoose":1,"ready":[false,false,false,false,false]}}`;
    let data = JSON.parse(inp);
    console.log(data);
    let teamId = this.role.getTeamId();
    let myData = data.parameters.team[teamId];

    this.cards = myData.card.map(c => { return {
        type: c.type,
        used: c.used,
        symbol: CardInfoService.getSymbol(c.type),
        title: CardInfoService.getTitle(c.type)
    }; });
    this.members = myData.member;

    // TODO
  }

  ngOnDestroy(): void {
    this.communication.unsubscribe("game-picker");
  }

  onMember(i) {
    console.log("member", i);
  }

  onCard(i) {
    console.log("card", i);
  }
}
