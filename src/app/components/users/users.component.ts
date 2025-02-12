import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = []; // Store list of users
  newUser: User = new User(0, '', '', 'admin', ''); // New user data

  constructor() {}

  ngOnInit(): void {
    // On component load, you can load users (for now it's a static array)
    this.users = [
      new User(1, 'Manager User', 'manager@example.com', 'manager', '123-456-7890'),
      new User(2, 'Admin User', 'admin@example.com', 'admin', '987-654-3210')
    ];
  }

  addUser(): void {
    if (this.newUser.name && this.newUser.email && this.newUser.contact) {
      const newId = this.users.length + 1;
      this.users.push(new User(newId, this.newUser.name, this.newUser.email, this.newUser.role, this.newUser.contact));
      this.newUser = new User(0, '', '', 'admin', ''); // Reset form after adding user
    } else {
      alert('Please fill in all fields.');
    }
  }

  editUser(id: number): void {
    alert(`Edit user with ID: ${id}`);
    // Logic for editing user, e.g., open a modal or form to update user details.
  }

  deleteUser(id: number): void {
    const index = this.users.findIndex(user => user.id === id);
    if (index > -1) {
      this.users.splice(index, 1); // Remove the user from the list
    }
  }
}
