import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepaymentScheduleComponent } from './repaymentschedule.component';

describe('RepaymentscheduleComponent', () => {
  let component: RepaymentScheduleComponent;
  let fixture: ComponentFixture<RepaymentScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepaymentScheduleComponent]
    });
    fixture = TestBed.createComponent(RepaymentScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
