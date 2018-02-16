import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePickerTeamComponent } from './game-picker-team.component';

describe('GamePickerTeamComponent', () => {
  let component: GamePickerTeamComponent;
  let fixture: ComponentFixture<GamePickerTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePickerTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePickerTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
