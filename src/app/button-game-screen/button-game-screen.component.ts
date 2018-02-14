import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-game-screen',
  templateUrl: './button-game-screen.component.html',
  styleUrls: ['./button-game-screen.component.css']
})
export class ButtonGameScreenComponent implements OnInit {
  totalClicks:number=0;

  constructor() { }

  ngOnInit() {
  }

}
