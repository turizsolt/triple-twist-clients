import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePickedScreenComponent } from './game-picked-screen.component';

describe('GamePickedScreenComponent', () => {
  let component: GamePickedScreenComponent;
  let fixture: ComponentFixture<GamePickedScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePickedScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePickedScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
