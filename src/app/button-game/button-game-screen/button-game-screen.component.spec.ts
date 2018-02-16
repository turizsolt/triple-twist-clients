import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGameScreenComponent } from './button-game-screen.component';

describe('ButtonGameScreenComponent', () => {
  let component: ButtonGameScreenComponent;
  let fixture: ComponentFixture<ButtonGameScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonGameScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGameScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
