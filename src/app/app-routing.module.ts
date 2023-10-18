import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPswComponent } from './components/forget-psw/forget-psw.component';
import { StaffAppComponent } from './components/staff-app/staff-app.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';
import { AccountProfileComponent } from './components/account-profile/account-profile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'forget-psw',component:ForgetPswComponent},
  {path:'staff-app',component:StaffAppComponent},
  {path:'verify-code',component:VerifyCodeComponent},
  {path:'account-profile',component:AccountProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
