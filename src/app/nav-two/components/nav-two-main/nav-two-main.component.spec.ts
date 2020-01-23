import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTwoMainComponent } from './nav-two-main.component';

describe('NavTwoMainComponent', () => {
  let component: NavTwoMainComponent;
  let fixture: ComponentFixture<NavTwoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTwoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTwoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
