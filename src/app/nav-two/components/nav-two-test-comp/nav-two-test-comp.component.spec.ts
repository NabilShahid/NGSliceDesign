import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTwoTestCompComponent } from './nav-two-test-comp.component';

describe('NavTwoTestCompComponent', () => {
  let component: NavTwoTestCompComponent;
  let fixture: ComponentFixture<NavTwoTestCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTwoTestCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTwoTestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
