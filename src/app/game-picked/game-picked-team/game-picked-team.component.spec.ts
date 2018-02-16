import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePickedTeamComponent } from './game-picked-team.component';

describe('GamePickedTeamComponent', () => {
  let component: GamePickedTeamComponent;
  let fixture: ComponentFixture<GamePickedTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePickedTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePickedTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
