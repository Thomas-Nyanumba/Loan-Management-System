import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoanComponent implements OnInit {
  loans = [
    {
      loanID: 'LN001',
      customerName: 'John Doe',
      principalAmount: 50000,
      interestRate: 5,
      repaymentPeriod: '12 months',
      repaymentFrequency: 'Monthly',
      nextDueDate: '2024-03-15',
      paidAmount: 20000,
      outstanding: 30000,
      status: ''
    },
    {
      loanID: 'LN002',
      customerName: 'Jane Smith',
      principalAmount: 70000,
      interestRate: 6,
      repaymentPeriod: '24 months',
      repaymentFrequency: 'Monthly',
      nextDueDate: '2024-12-01', // Overdue date
      paidAmount: 70000,
      outstanding: 0,
      status: ''
    },
    {
      loanID: 'LN003',
      customerName: 'Mark Johnson',
      principalAmount: 50000,
      interestRate: 5,
      repaymentPeriod: '12 months',
      repaymentFrequency: 'Monthly',
      nextDueDate: '2025-03-15',
      paidAmount: 20000,
      outstanding: 30000,
      status: ''
    }
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  /** Automatically updates loan status */
  updateLoanStatus() {
    const today = new Date();

    this.loans.forEach(loan => {
      const dueDate = new Date(loan.nextDueDate);

      if (loan.outstanding === 0) {
        loan.status = 'Paid';
      } else if (dueDate < today) {
        loan.status = 'Overdue';
      } else {
        loan.status = 'Active';
      }
    });

    this.cdr.detectChanges(); // Force UI update
  }

  /** View Loan Details */
  viewLoan(loan: any) {
    alert(`
      Loan Details:
      Customer: ${loan.customerName}
      Principal: Ksh ${loan.principalAmount}
      Interest Rate: ${loan.interestRate}%
      Repayment: ${loan.repaymentPeriod}
      Next Due: ${loan.nextDueDate}
      Outstanding Balance: Ksh ${loan.outstanding}
      Status: ${loan.status}
    `);
  }

  /** Edit Loan */
  editLoan(loan: any) {
    const newAmount = prompt(`Edit principal amount for ${loan.customerName}:`, loan.principalAmount.toString());
    if (newAmount !== null && !isNaN(Number(newAmount))) {
      loan.principalAmount = Number(newAmount);
      this.updateLoanStatus(); // Refresh the status
      alert(`${loan.customerName}'s loan updated!`);
    }
  }

  /** Delete Loan */
  deleteLoan(loan: any) { // this is a method whose inside property can be called using the this word.
    if (loan.outstanding > 0) {
      alert(`Cannot delete ${loan.customerName} as they have an outstanding balance of Ksh ${loan.outstanding}.`);
    } else {
      const confirmDelete = confirm(`Are you sure you want to delete ${loan.customerName}'s loan?`);
      if (confirmDelete) {
        this.loans = this.loans.filter(l => l !== loan);
        this.cdr.detectChanges(); // Ensure UI updates after deletion
        alert(`${loan.customerName}'s loan deleted successfully.`);
      }
    }
  }

  /** Lifecycle Hook */
  ngOnInit() { 
    this.updateLoanStatus(); // Update status when component loads
    console.log(this.loans);
  }
}
