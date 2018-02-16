import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePickerHostComponent } from './game-picker-host.component';

describe('GamePickerHostComponent', () => {
  let component: GamePickerHostComponent;
  let fixture: ComponentFixture<GamePickerHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePickerHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePickerHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
