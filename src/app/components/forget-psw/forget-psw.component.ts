import {Component, OnInit} from '@angular/core';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forget-psw',
  template: `
    <div class="container">
      <div class="wrapper">
        <div class="logo">
          <img src="./assets/img/logo.png" alt="logo" />
          <h1>Forget Password</h1>
          <h1>Input your email to reset password</h1>
        </div>
        <form style="display: grid;"  [formGroup]="forgetPswForm" (ngSubmit)="onSubmit()">
          <div class="input_form">
            <input type="email" name="email" id="email" placeholder="Email" formControlName="email"/>
          </div>
          <span><fa-icon [icon]="mailBulk"></fa-icon></span>
          <span class="error" *ngIf="forgetPswForm.get('email').invalid && forgetPswForm.get('email').touched">Email is not valid</span>

          <button type="submit"  [disabled]="forgetPswForm.invalid">
            <a>Reset Password</a>
          </button>
          <span class="bck"><a routerLink="/login"> < Back To Login</a></span>
        </form>
      </div>
    </div>
<!--    routerLink="/verify-code"-->
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
      input[type="email"] {
        width: 100%;
        padding: 6px 2rem;
        margin-top:5px;
        outline: none;
        border: #808080 1px solid;
        border-radius: 4px;
        transition: all 0.5s ease;
      }
      input[type="email"]:focus{
        border:#0099ff 1px solid;
      }
      .input_form+span{
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

      .myForm.INVALID {
        border: 1px solid red;
        box-shadow: 0 0 31px rgb(255, 0, 0, 0.7) !important;
      }

      .myForm.PENDING {
        border: 1px solid #f6de0b;
        box-shadow: 0 0 31px rgb(255, 235, 0, 0.7) !important;
      }

      .myForm.VALID {
        border: 1px solid #2ee536;
        box-shadow: 0 0 31px rgb(78, 233, 84, 0.7) !important;
      }
`],
})
export class ForgetPswComponent implements OnInit{
  mailBulk = faMailBulk;
 forgetPswForm:FormGroup;
  formStatus;
  constructor(private route:Router) {
  }
 ngOnInit() {
   this.forgetPswForm = new FormGroup({
     email : new FormControl(null,[Validators.required,Validators.email],this.emailNotAllowed)
   })
   setTimeout(()=>{
     this.forgetPswForm.patchValue({
       email:'somtola@gmail.com'
     })
   },1000);

   this.forgetPswForm.statusChanges.subscribe((value)=>{
     console.log(value);
     this.formStatus = value;
   })
 }
 onSubmit()
 {
   console.log(this.forgetPswForm);
   this.route.navigateByUrl('verify-code');
 }

  emailNotAllowed(control:FormControl): Promise<any> | Observable<any> {
    const response = new Promise((resolve, reject) =>{
      setTimeout(()=>{
        if(control.value === 'smtola@gmail.com' ){
          resolve({emailNotAllowed:true})
        }else{
          resolve(null)
        }
      },1000)
    })
    return response;
  }
}
