import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRegistrationFormComponent } from './my-registration-form.component';

describe('MyRegistrationFormComponent', () => {
  let component: MyRegistrationFormComponent;
  let fixture: ComponentFixture<MyRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
