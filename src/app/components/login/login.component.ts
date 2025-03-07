import { Component } from '@angular/core';
import { Router } from '@angular/router';  // <-- Import Router
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    // we could use an object here to contain all the properties instead of listing them one by one. e.g. logins = {list them, , separated}
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