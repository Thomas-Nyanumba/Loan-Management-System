import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  // Simulate login: Store user status in localStorage
  login(email: string, password: string) {
    if (email === 'thomas.nnyanumba@gmail.com' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  // Logout function
  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

  // Check if user is logged in
  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
