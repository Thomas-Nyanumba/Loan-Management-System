import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanComponent } from './loans.component';

describe('LoansComponent', () => {
  let component: LoanComponent;
  let fixture: ComponentFixture<LoanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanComponent]
    });
    fixture = TestBed.createComponent(LoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
