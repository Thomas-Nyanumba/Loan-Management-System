import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  totalLoansDisbursed: number = 250000; // Dummy total amount
  totalCustomers: number = 120; // Dummy total customers

  ngAfterViewInit() {
    this.renderLineChart();
    this.renderPieChart();
  }

  renderLineChart() {
    new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Loans Disbursed Over Time',
          data: [20000, 40000, 30000, 50000, 70000, 60000], // Dummy data
          borderColor: '#3498db',
          backgroundColor: 'rgba(52, 152, 219, 0.2)',
          fill: false,
          borderWidth: 2,
          tension: 0.4,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Allows it to stretch properly
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: true },
        },
      }
    });
  }

  renderPieChart() {
    new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Personal Loan', 'Business Loan', 'Auto Loan', 'Home Loan'],
        datasets: [{
          label: 'Loans by Type',
          data: [40, 30, 20, 10], // Dummy data in percentages
          backgroundColor: ['#e74c3c', '#f39c12', '#2ecc71', '#3498db']
        }]
      }
    });
  }
}
function renderPieChart() {
  throw new Error('Function not implemented.');
}

