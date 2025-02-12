import { Component } from '@angular/core';
import { Router } from '@angular/router';  // <-- Import Router
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage = ';'
  
  constructor(private authService: AuthService, private router: Router) {}

  // Handle the form submission
  onSubmit() {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid email or password!';
    }

    // Perform validation or any logic here
    // console.log('Login successful'); // Just to show in console for now

    // Redirect to the dashboard
    // this.router.navigate(['/dashboard']);  // <-- Redirect to dashboard
  }
}