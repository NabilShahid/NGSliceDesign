import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavThreeMainComponent } from './nav-three-main.component';

describe('NavThreeMainComponent', () => {
  let component: NavThreeMainComponent;
  let fixture: ComponentFixture<NavThreeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavThreeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavThreeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
