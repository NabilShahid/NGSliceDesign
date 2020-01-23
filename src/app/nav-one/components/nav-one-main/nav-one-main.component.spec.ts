import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOneMainComponent } from './nav-one-main.component';

describe('NavOneMainComponent', () => {
  let component: NavOneMainComponent;
  let fixture: ComponentFixture<NavOneMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavOneMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavOneMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
