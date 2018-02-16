import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeTeamComponent } from './welcome-team.component';

describe('WelcomeTeamComponent', () => {
  let component: WelcomeTeamComponent;
  let fixture: ComponentFixture<WelcomeTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
