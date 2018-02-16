import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeHostComponent } from './welcome-host.component';

describe('WelcomeHostComponent', () => {
  let component: WelcomeHostComponent;
  let fixture: ComponentFixture<WelcomeHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
