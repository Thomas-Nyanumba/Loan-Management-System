import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoanComponent } from '../loans/loans.component';


@Component({
  selector: 'app-customer',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomerComponent implements OnInit {
  // Sample data for customers
  customers = [
    {
      customerId: 'C001',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      totalLoansTaken: 3,
      totalAmountBorrowed: 15000,
      totalOutstandingAmount: 5000,
      status: '',
    },
    {
      customerId: 'C002',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      totalLoansTaken: 2,
      totalAmountBorrowed: 10000,
      totalOutstandingAmount: 2000,
      status: '',
    },
    {
      customerId: 'C003',
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '555-555-5555',
      totalLoansTaken: 5,
      totalAmountBorrowed: 25000,
      totalOutstandingAmount: 0,
      status: '',
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

// Check if customer can be deleted (must have no outstanding loan)
canDeleteCustomer(customer: any): boolean {
   return customer.totalOutstandingAmount === 0
}
// Edit customer details (name, email, phone)
editCustomer(customer: any) {
  const newName = prompt('Edit customer name:', customer.name);
  const newEmail = prompt('Edit customer email:', customer.email);
  const newPhone = prompt('Edit customer phone:', customer.phone);

  if (newName !== null && newEmail !== null && newPhone !== null) {
    customer.name = newName;
    customer.email = newEmail;
    customer.phone = newPhone;
    alert('Customer details updated!');
  }
}

// Delete customer if no outstanding loans
deleteCustomer(customer: any) {
  if (this.canDeleteCustomer(customer)) {
    const confirmDelete = confirm(`Are you sure you want to delete ${customer.name}?`);
    if (confirmDelete) {
      this.customers = this.customers.filter(c => c !== customer);
      alert('Customer deleted successfully.');
    }
  } else {
    alert(`${customer.name} has outstanding loans and cannot be deleted.`);
  }
}

updatecustomerstatus() {

  this.customers.forEach(customer => {

    if (customer.totalOutstandingAmount === 0) {
      customer.status = 'Cleared';
    } 
    else 
    {
      customer.status = 'Active';
    }
  this.cdr.detectChanges(); // Force UI update
});
}

ngOnInit(): void {
  this.updatecustomerstatus()
}
}
