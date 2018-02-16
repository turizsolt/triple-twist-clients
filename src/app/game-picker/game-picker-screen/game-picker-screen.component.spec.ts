import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePickerScreenComponent } from './game-picker-screen.component';

describe('GamePickerScreenComponent', () => {
  let component: GamePickerScreenComponent;
  let fixture: ComponentFixture<GamePickerScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePickerScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePickerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
