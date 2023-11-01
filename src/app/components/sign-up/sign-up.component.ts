import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";
import {HotToastService} from "@ngneat/hot-toast";

export function passwordMatchValidator(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors| null =>{
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if(password && confirmPassword && password !== confirmPassword){
      return {
        passwordsDontMatch:true
      }
    }
    return null;
  };
}


@Component({
  selector: 'app-sign-up',
  template: `
    <div class="container">
      <div class="wrapper">
        <div class="logo">
          <img src="./assets/img/logo.png" alt="logo" />
          <h1>Sign up your account</h1>
        </div>
        <form [formGroup]="signUpFrom" (ngSubmit)="onSubmit()">
          <div class="login_form">
            <input type="text" name="name" placeholder="Username" formControlName="name"/>
          </div>
          <span><fa-icon [icon]="user"></fa-icon></span>
          <span class="error" *ngIf="name?.errors?.['required'] && name.touched">Username is required</span>
<!--          <span class="error">The field is cannot contain of spaces</span>-->

          <div class="login_form">
            <input type="email" name="email" placeholder="email" formControlName="email"/>
          </div>
          <span><fa-icon [icon]="eml"></fa-icon></span>
          <span class="error" *ngIf="email?.errors?.['required'] && email.touched">Email is required</span>
          <span class="error" *ngIf="email?.errors?.['email'] && email.touched">Please enter correct email format!</span>

          <div class="login_form">
            <input
              type="password"
              name="password"
              placeholder="Password"
              formControlName="password"
            />
          </div>
          <span><fa-icon [icon]="lock"></fa-icon></span>
          <span class="error" *ngIf="password?.errors?.['required'] && password.touched">Password is required</span>

          <div class="login_form">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              formControlName="confirmPassword"
            />
          </div>
          <span><fa-icon [icon]="lock"></fa-icon></span>
          <span class="error" *ngIf="confirmPassword?.errors?.['required'] && confirmPassword.touched">Confirm password is required</span>
          <span class="error" *ngIf="signUpFrom.errors?.['passwordsDontMatch'] && confirmPassword.touched">Password not match!</span>

          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        display: grid;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      }
      .wrapper {
        background: transparent;
        backdrop-filter: blur(50px);
        padding: 1rem 2rem;
        border-radius: 4px;
        box-shadow: 0 2px 3px grey;
      }
      .logo > img {
        width: 15vh;
        margin: 10px auto;
        display: block;
      }
      .logo > h1 {
        text-align: center;
        font-size: 1.4rem;
        margin-bottom: 10px;
      }
      input[type='text'],
      input[type='password'], input[type='email']{
        width: 100%;
        padding: 6px 2rem;

        outline: none;
        border: #808080 1px solid;
        border-radius: 4px;
        transition: all 0.5s ease;
      }
      input[type='text']:focus {
        border: #0099ff 1px solid;
      }
      input[type='password']:focus {
        border: #0099ff 1px solid;
      }
      input[type='email']:focus {
        border: #0099ff 1px solid;
      }
      .login_form + span {
        position: relative;
        bottom: 25px;
        left: 10px;
      }

      button[type='submit'] {
        width: 100%;
        background: #009999;
        outline: none;
        border: none;
        border-radius: 4px;
        padding: 5px 2rem;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
        margin: 10px 0;
        overflow-x: hidden;
        transition: all 0.5s ease;
      }
      button[type='submit']:hover {
        background: #009bac;
        transform: scale(1.01);
      }

      .error {
        position: relative;
        color: red;
        right: 13px;
        font-size: 12px;
      }
      input.ng-invalid,
      input.ng-touched {
        border: red 1px solid;
      }
      input.ng-valid,
      input.ng-untouched {
        border: grey 1px solid;
      }
    `,
  ],
})
export class SignUpComponent implements OnInit{
  user = faUser;
  lock = faLock;
  eml = faMailBulk;
  signUp:FormGroup;
  constructor(private userService: UsersService, private router:Router,private toast: HotToastService) {
  }
  ngOnInit() {}
  signUpFrom = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required])
  },{validators:passwordMatchValidator})

  get name(){
    return this.signUpFrom.get('name');
  }
  get email(){
    return this.signUpFrom.get('email');
  }
  get password(){
    return this.signUpFrom.get('password');
  }
  get confirmPassword(){
    return this.signUpFrom.get('confirmPassword');
  }

  onSubmit(){
    if(!this.signUpFrom.valid){return};

    const {name,email,password} = this.signUpFrom.value;
    this.userService.signUp(name,email,password)
      .pipe(this.toast.observe({
        success: 'Signed successfully',
        loading: 'Signing in...',
        error : ({message}) => `${message}`
      })).subscribe(()=>{
      this.router.navigate(['/login']);
    })
  }
}
