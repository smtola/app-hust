import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  template: `
    <div class="wrapper">
      <div class="logo">
        <img src="./assets/img/logo.png" alt="logo" />
        <h1>Login into your account</h1>
      </div>
      <form action="">
        <div class="login_form">
          <span><fa-icon [icon]="user"></fa-icon></span>
          <input type="text" name="uname" id="uname" placeholder="Username" />
        </div>
        <div class="login_form">
          <span><fa-icon [icon]="lock"></fa-icon></span>
          <input type="password" name="pass" id="pass" placeholder="Password" />
        </div>
        <div class="remember">
          <input
            type="checkbox"
            checked="checked"
            name="remember"
            id="remember"
          />
          Remember me
          <a routerLink="/forget-psw">Forget Password</a>
        </div>
        <button type="submit" routerLink=""><a>Login</a></button>
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
  `,
  styles: [
    `
      .wrapper {
        position: relative;
        max-width: 450px;
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
      .login_form {
        position: relative;
        margin: 30px 0;
        max-width: 325px;
        border: 2px solid #6c6c6cc1;
        border-radius: 10px;
        padding: 10px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .login_form:hover {
        border: 2px solid #00b7ffc1;
      }
      .login_form input {
        width: 100%;
        height: 25px;
        background: transparent;
        border: none;
        outline: none;
        font-size: 1rem;
        color: #000000;
        padding: 0 30px 0 10px;
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
      input[type='button'] {
        width: 100%;
        height: 40px;
        border-radius: 10px;
        background-color: rgba(0, 183, 255, 0.324);
        outline: none;
        border: none;
        cursor: pointer;
        margin: 10px 0;
        font-size: 1rem;
        font-weight: 600;
        color: #6d6d6d;
        transition: all 0.4s ease;
      }
      input[type='button']:hover {
        background-color: rgba(0, 183, 255, 0.963);
        color: #fff;
      }
      button[type='submit'] {
        width: 100%;
        height: 40px;
        border-radius: 10px;
        background-color: rgba(0, 183, 255, 0.324);
        outline: none;
        border: none;
        cursor: pointer;
        margin-bottom: 1rem;
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
        float: right;
        text-decoration: none;
        font-size: 1rem;
        color: #000000;
      }

      .input_form {
        position: relative;
        margin: 30px 0;
        max-width: 325px;
        border: 2px solid #6c6c6cc1;
        border-radius: 10px;
        padding: 5px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
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
      .verify_form {
        position: relative;
        margin: 20px 0;
        max-width: 350px;
        border: 2px solid #6c6c6cc1;
        border-radius: 10px;
        padding: 10px 25px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .verify_form input {
        width: 250vh;
        height: 25px;
        background: transparent;
        border: none;
        outline: none;
        font-size: 1rem;
        color: #000000;
        padding: 0 30px 0 10px;
      }
      .verify_form:hover {
        border: 2px solid #00b7ffc1;
      }
      .lang {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .lang img {
        border-radius: 2px;
        margin: 10px;
      }

      .lang img:hover {
        transform: scale(1.05);
      }
    `,
  ],
})
export class LoginComponent {
  user = faUser;
  lock = faLock;
}
