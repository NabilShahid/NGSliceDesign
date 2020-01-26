import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInstructionsComponent } from './register-instructions.component';

describe('RegisterInstructionsComponent', () => {
  let component: RegisterInstructionsComponent;
  let fixture: ComponentFixture<RegisterInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
