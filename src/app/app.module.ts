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
import { NavbarComponent } from './components/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {UsersService} from "./components/services/users.service";
import {HotToastModule, provideHotToastConfig} from '@ngneat/hot-toast';
import { MenuComponent } from './components/menu/menu.component';
import { BackgroundComponent } from './components/background/background.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ForgetPswComponent,
    StaffAppComponent,
    VerifyCodeComponent,
    AccountProfileComponent,
    NavbarComponent,
    SignUpComponent,
    MenuComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"user-9cbd2","appId":"1:866726122919:web:aa816979ac39ce08a69282","databaseURL":"https://user-9cbd2-default-rtdb.firebaseio.com","storageBucket":"user-9cbd2.appspot.com","apiKey":"AIzaSyBX2nyP5ErVpNUVVf_6NqczRMFbt0lrWyM","authDomain":"user-9cbd2.firebaseapp.com","messagingSenderId":"866726122919"})),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot(),
  ],
  providers: [UsersService,provideHotToastConfig()],
  bootstrap: [AppComponent]
})
export class AppModule { }
