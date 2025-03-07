import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService], //This service class is injected into all the app ComponentFactoryResolver, services and directives. 
  // Says what is instance is to be injected. 
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(public authService: AuthService) {} // declares how it should be injected. using the constructor. inside is a parameter of type authservice

  onLogout(){
    localStorage.removeItem("isLoggedIn");
  }
  }
