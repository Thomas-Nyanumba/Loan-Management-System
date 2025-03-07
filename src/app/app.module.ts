import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CustomerComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoanComponent } from './components/loans/loans.component';
import { RepaymentScheduleComponent } from './components/repaymentschedule/repaymentschedule.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CustomerComponent,
    DashboardComponent,
    LoanComponent,
    RepaymentScheduleComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], // can inject instance dependencies here after importing it. It will be available throughout the app. 
  //therefore, no need to provide the service in specific components
  bootstrap: [AppComponent]
})
export class AppModule { }
