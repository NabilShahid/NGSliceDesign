import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOneTestCompComponent } from './nav-one-test-comp.component';

describe('NavOneTestCompComponent', () => {
  let component: NavOneTestCompComponent;
  let fixture: ComponentFixture<NavOneTestCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavOneTestCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavOneTestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
