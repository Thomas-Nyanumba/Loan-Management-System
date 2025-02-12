import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isSidebarOpen = true;  // Control sidebar visibility

    constructor(public authService: AuthService) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;  // Toggle the sidebar
  }
}
