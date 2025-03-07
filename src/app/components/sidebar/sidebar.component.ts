import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sidebar', //this selector is used as an html tag declared in the app.component.html
  //but if put in square brackets, it will be an html attribute. will be declared in the app.component.html as <div app-sidebar></div>. Used in angular directives
  // . is used to use the selector as a css class eg <div class = "app-sidebar"></div>
  //  # is used to use the selector as an id eg <div id = "app-sidebar"></div> check on the console to see the differences. 
  // Data binding communicate between the component class (.ts with UI logic) and the view template (html rendered on the browser)
  //string interpolation is used for one way binding. that is from ts to view the vice versa is called event binding.
  // used to display piece of data in HTML e.g. name etc while property binding is used to project DOM objects e.g. images
  // 2 way data binding, data flows in two ways simulteneously. we use ngModel to achieve this. 
  // for some html attributes like disabled, hidden, and checked, string interpolation will not work there we need to use property binding
  // <button [disabled] = "product.inStock>0">Buy now</button>

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
