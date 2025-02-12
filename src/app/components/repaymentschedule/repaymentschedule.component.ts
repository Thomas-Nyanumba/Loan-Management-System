import { Component } from '@angular/core';

@Component({
  selector: 'app-repayment-schedule',
  templateUrl: './repaymentschedule.component.html',
  styleUrls: ['./repaymentschedule.component.css']
})
export class RepaymentScheduleComponent {
  repaymentSchedule = [
    {
      loanID: 'LN001',
      customerName: 'John Doe',
      dueDate: '2025-03-15',
      installmentAmount: 5000,
      principal: 4000,
      interest: 1000,
      paid: 0,
      balance: 5000,
      status: 'Pending'
    },
    {
      loanID: 'LN001',
      customerName: 'John Doe',
      dueDate: '2025-04-15',
      installmentAmount: 5000,
      principal: 4000,
      interest: 1000,
      paid: 5000,
      balance: 0,
      status: 'Paid'
    },
    {
      loanID: 'LN002',
      customerName: 'Jane Smith',
      dueDate: '2025-04-10',
      installmentAmount: 7000,
      principal: 6000,
      interest: 1000,
      paid: 0,
      balance: 7000,
      status: 'Overdue'
    }
  ];

  getStatusClass(status: string): string {
    return status.toLowerCase();
  }
}
