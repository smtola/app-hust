import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPswComponent } from './components/forget-psw/forget-psw.component';
import { StaffAppComponent } from './components/staff-app/staff-app.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';
import { AccountProfileComponent } from './components/account-profile/account-profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {MenuComponent} from "./components/menu/menu.component";
import {redirectLoggedInTo, redirectUnauthorizedTo,canActivate} from "@angular/fire/auth-guard";

const redirectToLogin = () => redirectUnauthorizedTo (['login']);
const redirectToHome = () => redirectLoggedInTo (['home']);
const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path:'login',
    component:LoginComponent,
    ...canActivate(redirectToHome)
  },
  {
    path:'sign-up'
    ,component:SignUpComponent,
    ...canActivate(redirectToHome)
  },
  {
    path:'forget-psw',
    component:ForgetPswComponent,
    ...canActivate(redirectToHome)
  },
  {
    path:'staff-app',
    component:StaffAppComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path:'verify-code',
    component:VerifyCodeComponent,
    ...canActivate(redirectToHome)
  },
  {
    path:'account-profile',
    component:AccountProfileComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path:'navbar',
    component:NavbarComponent},
  {
    path:'menu',
    component:MenuComponent,
    ...canActivate(redirectToLogin)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
