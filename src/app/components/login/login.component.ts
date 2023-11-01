import { Component, OnInit} from '@angular/core';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsersService} from "../services/users.service";
import {HotToastService} from "@ngneat/hot-toast";
@Component({
  selector: 'app-login',
  template: `

    <div class="container">
      <div class="wrapper">
        <div class="logo">
          <img src="./assets/img/logo.png" alt="logo" />
          <h1>Login into your account</h1>
        </div>
        <form [formGroup]="loginForm" (ngSubmit)="submit()">
          <div class="login_form">
            <input type="email" name="email" placeholder="email" formControlName="email"/>
          </div>
          <span><fa-icon [icon]="user"></fa-icon></span>
          <span class="error" *ngIf="email?.errors?.['required'] && email.touched ">Email is required</span>
          <span class="error" *ngIf="email?.errors?.['email'] && email.touched ">Please enter correct email format!</span>
          <div class="login_form">
            <input type="password" name="pass" id="pass" placeholder="Password" formControlName="password"/>
          </div>
          <span><fa-icon [icon]="lock"></fa-icon></span>
          <span class="error" *ngIf="password?.errors?.['required'] && password.touched ">Password is required</span>
          <span class="error" *ngIf="password?.errors?.['minlength'] && password.touched ">Your password is not match!</span>
          <div class="remember">
            <input type="checkbox" checked="checked" name="remember" id="remember"/>
            <label for="check">Remember me</label>
            <a routerLink="/forget-psw">Forget Password</a>
          </div>
          <button type="submit">Login</button>
          <span class="center margin-top margin-bottom">Create new account? <a class="sign-up-link" routerLink="/sign-up">Sign Up!</a></span>
        </form>
        <div class="lang">
          <a href="#"
          ><img
            src="./assets/img/Flag-Cambodia.jpg"
            alt="khmer"
            width="35"
            height="25"
          /></a>
          <a href="#"
          ><img
            src="./assets/img/Flag-United-States-of-America.jpg"
            alt="usa"
            width="35"
            height="25"
          />
          </a>
        </div>
      </div>
    </div>

  `,
  styles: [
    `
     .container{
       display:grid;
       justify-content:center;
       align-items:center;
       min-height: 100vh;
     }
      .wrapper{
        background: transparent;
        backdrop-filter: blur(50px);
        padding:1rem 2rem;
        border-radius: 4px;
        box-shadow: 0 2px 3px grey;
      }
     .logo>img{
      width:15vh;
      margin:10px auto;
      display:block;
     }
     .logo>h1{
      text-align:center;
      font-size:1rem;
       margin-bottom: 10px;
     }
      input[type="email"],input[type="password"] {
         width: 100%;
         padding: 6px 2rem;

         outline: none;
         border: #808080 1px solid;
         border-radius: 4px;
         transition: all 0.5s ease;
     }
      input[type="text"]:focus{
        border:#0099ff 1px solid;
      }
      input[type="password"]:focus{
        border:#0099ff 1px solid;
      }
     .login_form+span{
      position:relative;
       bottom:25px;
       left:10px;
     }
    .remember{
      display:flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .remember>a{
      text-decoration: none;
      color:#0099ff;
      transition: all 1s ease;
    }
     .sign-up-link{
       font-size: 1rem;
       margin-left: 8px;
     }
      .remember>a:hover{
        opacity: 0.9;
        text-decoration: underline;
      }
      #remember:checked{
        accent-color: blue;
      }
       button[type="submit"]{
         width: 100%;
         background: #009999;
         outline:none;
         border:none;
         border-radius: 4px;
         padding:5px 2rem;
         color:#fff;
         font-size: 1rem;
         cursor:pointer;
         margin:10px 0;
         overflow-x: hidden;
         transition: all 0.5s ease;
       }
      button[type="submit"], button[type="button"]:hover{
        background: #009bac;
        transform: scale(1.01);
      }
      .lang{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .lang>a>img{
        width: 25px;
        height: 15px;
        margin: 0 10px;
        border-radius: 4px;
        overflow-x: hidden;
        transition: all 0.5s ease;
      }
      .lang>a>img:hover{
        transform: scale(1.03);
      }
     .error{
       position: relative;
       color:red;
       right: 13px;
       font-size: 12px;
     }
     input.ng-invalid,input.ng-touched{
       border:red 1px solid;
     }
     input.ng-valid,input.ng-untouched{
       border:grey 1px solid;
     }

    `,
  ],
})
export class LoginComponent implements OnInit {
  user = faMailBulk;
  lock = faLock;
  constructor(
    private router:Router,
    private usersService:UsersService,
    private toast:HotToastService
  ) {}
  ngOnInit() { }

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
  })

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  submit(){
      if(!this.loginForm.valid && this.loginForm === null){return;}
      const {email, password} = this.loginForm.value;
      this.usersService.login(email,password)
        .pipe(this.toast.observe({
            success: 'Logged in successfully',
            loading: 'Logging in...',
            error : 'There was error'
        })).subscribe(()=>{
          this.router.navigate(['/home']);
      })
  }
}
