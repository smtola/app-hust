import { Component } from '@angular/core';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forget-psw',
  template: `
    <div class="wrapper">
      <div class="logo">
        <img src="./assets/img/logo.png" alt="logo" />
        <h1>Forget Password</h1>
        <h1>Input your email to reset password</h1>
      </div>
      <form #forgetForm='ngForm' (ngSubmit)="onSubmit(forgetForm.value)" style="display: grid;">
        <div class="input_form">
          <span><fa-icon [icon]="mailBulk"></fa-icon></span>
          <input type="email" name="email" id="email" placeholder="Email" #email="ngModel"
          aria-describedby="emailHelp"
          required ngModel email/>
        </div>
        <span *ngIf="email.invalid && email.touched" class="error">Email is not valid</span>
        <button type="submit" routerLink="/verify-code" [disabled]="forgetForm.invalid">
          <a>Reset Password</a>
        </button>
        <span class="bck"><a routerLink="/login"> < Back To Login</a></span>
      </form>
    </div>
  `,
  styles: [
    `
      .wrapper {
        position: relative;
        max-width: 450px;
        background: transparent;
        border-radius: 20px;
        backdrop-filter: blur(55px);
        padding: 2rem 3rem;
        transition: all 0.4 ease;
      }
      .logo > img {
        display: block;
        margin: 0 auto;
        width: 90px;
        height: 88px;
      }
      .logo > h1 {
        margin: 10px;
        font-size: 1rem;
        text-align: center;
        color: #020202;
      }
      .remember {
        font-size: 1rem;
        color: #000000;
        margin: 10px 0px;
      }
      input[type='checkbox'] {
        outline: 1px solid #0096fa;
        user-select: none;
        border-radius: 5px;
        width: 1rem;
        height: 1rem;
        list-style: none;
        accent-color: #0096fa;
      }
      .info {
        background: #fff9c4;
        border-radius: 6px;
        padding: 0.5rem;
        text-align: center;
        width: clamp(300px, 60%, 850px);
      }

      @supports (accent-color: #fff) {
        .info {
          display: none;
        }
      }
      .remember a {
        color: #057727;
        text-decoration: none;
        cursor: pointer;
        padding: 0 13px;
        transition: all 0.4 ease;
      }
      .remember a:hover {
        text-decoration: underline;
      }
      button[type='submit'] {
        width: 100%;
        max-width: 325px;
        height: 40px;
        border-radius: 10px;
        background-color: rgba(0, 183, 255, 0.324);
        outline: none;
        border: none;
        cursor: pointer;
        margin: 1rem 0;
        font-size: 1rem;
        font-weight: 600;
        transition: all 0.4s ease;
      }
      button[type='submit']:hover {
        background-color: rgba(0, 183, 255, 0.963);
        color: #fff;
      }
      button a {
        text-decoration: none;
        color: #888888;
      }
      button:hover a {
        color: white;
      }
      .bck a {
        float:right;
        text-decoration: none;
        font-size: 1rem;
        color: #000000;
        opacity: 0.5;
      }
      .bck a:hover {
        opacity: 1;
      }
      .input_form {
        position: relative;
        max-width: 325px;
        border: 2px solid #6c6c6cc1;
        border-radius: 10px;
        padding: 5px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:6px 0;
      }
      .input_form input {
        width: 100%;
        height: 25px;
        background: transparent;
        border: none;
        outline: none;
        font-size: 1rem;
        color: #000000;
        padding: 0 30px 0 10px;
      }
      .input_form:hover {
        border: 2px solid #00b7ffc1;
      }
      .error{
        padding: 5px 5rem;
        max-width: 300px;
        color:	#990000;
        background:rgba(255, 77, 77,.3);
        border-radius:10px;
        border:1px solid #990000;
      }
    `,
  ],
})
export class ForgetPswComponent {
  mailBulk = faMailBulk;
  onSubmit(data:any){
    console.warn(data);
  }
}
