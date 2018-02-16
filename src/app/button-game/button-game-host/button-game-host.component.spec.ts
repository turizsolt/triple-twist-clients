import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGameHostComponent } from './button-game-host.component';

describe('ButtonGameHostComponent', () => {
  let component: ButtonGameHostComponent;
  let fixture: ComponentFixture<ButtonGameHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonGameHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGameHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
