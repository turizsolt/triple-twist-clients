import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGameTeamComponent } from './button-game-team.component';

describe('ButtonGameTeamComponent', () => {
  let component: ButtonGameTeamComponent;
  let fixture: ComponentFixture<ButtonGameTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonGameTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGameTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
