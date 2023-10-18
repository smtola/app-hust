import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPswComponent } from './components/forget-psw/forget-psw.component';
import { StaffAppComponent } from './components/staff-app/staff-app.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccountProfileComponent } from './components/account-profile/account-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ForgetPswComponent,
    StaffAppComponent,
    VerifyCodeComponent,
    AccountProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
