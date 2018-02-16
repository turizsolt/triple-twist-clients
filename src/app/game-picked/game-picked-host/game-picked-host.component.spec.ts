import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePickedHostComponent } from './game-picked-host.component';

describe('GamePickedHostComponent', () => {
  let component: GamePickedHostComponent;
  let fixture: ComponentFixture<GamePickedHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePickedHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePickedHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
