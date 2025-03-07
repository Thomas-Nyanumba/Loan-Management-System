import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root' // a declaration to all the service or inject it in all of the entire application. because the provider is root. 
})
export class AuthService {
  
  constructor(private router: Router) {} // private property parameter router of type router

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
    this.router.navigate(['/login']);     // this shows that the parameter router is a private property
  }

  // Check if user is logged in
  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
