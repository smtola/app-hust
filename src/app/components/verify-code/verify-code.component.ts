import { Component,OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {Route, Router} from "@angular/router";
@Component({
  selector: 'app-verify-code',
  template: `
        <div class="container">
          <div class="wrapper">
            <div class="logo">
              <img src="./assets/img/logo.png" alt="logo" />
              <h1>Please fill OTP 6 numbers</h1>
            </div>
            <form style="display: grid;" [formGroup]="verifyCode" (ngSubmit)="onSubmit()">
              <div class="verify_form">
                <input type="text" name="username" id="uname" placeholder="sideton" formControlName="username"/>
                <span><fa-icon [icon]="user"></fa-icon></span>
              </div>

              <span class="error" *ngIf="verifyCode.get('username').errors?.['required'] && verifyCode.get('username').touched">The field is required</span>
              <span class="error" *ngIf="verifyCode.get('username').errors?.['noSpaceAllowed'] && verifyCode.get('username').touched">Username cannot contain a space</span>

              <div class="verify_form">
                <input type="text" name="code" id="code" placeholder="Please fill OTP 6 numbers" formControlName="code"/>
              <span><fa-icon [icon]="code"></fa-icon></span>
              </div>

              <span class="error" *ngIf="verifyCode.get('code').errors?.['required'] && verifyCode.get('code').touched"> This field OTP only 6 code </span>
              <button type="submit" [disabled]="verifyCode.invalid">Verify OTP</button>
              <span class="bck"><a routerLink="/login"> < Back To Login</a></span>
            </form>
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
        margin-bottom: 5px;
      }
      input[type="text"] {
        width: 100%;
        padding: 6px 2rem;
        margin-top:5px;
        outline: none;
        border: #808080 1px solid;
        border-radius: 4px;
        transition: all 0.5s ease;
      }
      input[type="text"]:focus{
        border:#0099ff 1px solid;
      }
      .verify_form>span{
        position:absolute;
        margin-top: 10px;
        left:40px;
      }
      .bck a {
        float: right;
        text-decoration: none;
        font-size: 1rem;
        color: #000000;
        opacity: 0.5;
      }
      .bck a:hover {
        opacity: 1;
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
      button[type="submit"]:hover{
        background: #009bac;
        transform: scale(1.01);
      }
      .error{
        color:red;
        font-size: 12px;
      }
      input.ng-invalid,input.ng-touched{
        border:red 1px solid;
      }
      input.ng-valid,input.ng-untouched{
        border:grey 1px solid;
      }
    `],
})
export class VerifyCodeComponent implements OnInit {
  user = faUser;
  code = faSearch;
  verifyCode: FormGroup;
  constructor(private route:Router) {
  }
  ngOnInit(){
    this.verifyCode = new FormGroup({
      username : new FormControl(null,[Validators.required,this.noSpaceAllowed]),
      code : new FormControl(null,[Validators.required,Validators.maxLength(6),Validators.minLength(6)])
    })

  }

  onSubmit(){
    console.log(this.verifyCode);
    this.route.navigateByUrl('login');
  }

  noSpaceAllowed(control:FormControl){
    if(control.value != null && control.value.indexOf(' ') != -1){
      return {noSpaceAllows:true};
    }
    return null;
  }
}
