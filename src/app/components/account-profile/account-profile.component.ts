import { Component } from '@angular/core';

@Component({
  selector: 'app-account-profile',
  template: `
    <div class="card-container">
      <img class="round" src="./assets/img/logo.png" alt="user" />
      <h3>Username</h3>
      <h6>City</h6>
      <p>
        User interface designer and <br />
        front-end developer
      </p>
      <div class="buttons">
        <button class="primary" routerLink="">Message</button>
        <button class="primary ghost" routerLink="">Following</button>
      </div>
    </div>
  `,
  styles: [
    `
      h3 {
        margin: 10px 0;
      }

      h6 {
        margin: 5px 0;
        text-transform: uppercase;
      }

      p {
        font-size: 14px;
        line-height: 21px;
      }

      .card-container {
        background-color: #100639;
        border-radius: 5px;
        box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
        color: #b3b8cd;
        padding: 30px 0;
        position: relative;
        width: 350px;
        max-width: 100%;
        text-align: center;
      }

      .card-container .round {
        border: 1px solid #03bfcb;
        border-radius: 50%;
        padding: 7px;
        width: 130px;
        height: 130px;
      }

      button.primary {
        background-color: #03bfcb;
        border: 1px solid #03bfcb;
        border-radius: 3px;
        color: #231e39;
        font-family: Montserrat, sans-serif;
        font-weight: 500;
        padding: 10px 25px;
        margin: 10px;
        cursor: pointer;
      }
      button.primary:hover {
        background-color: #03becb5b;
        color: #fff;
        border: 1px solid #0321cb;
      }
      button.primary.ghost {
        background-color: transparent;
        color: #02899c;
      }

      @media screen and (max-width: 768px) {
        h3 {
          margin: 10px 0;
          font-size: 14px;
        }
        p {
          font-size: 12px;
          line-height: 15px;
        }
        .card-container {
          background-color: #100639;
          border-radius: 5px;
          box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
          color: #b3b8cd;
          padding: 25px 0;
          position: relative;
          width: 278px;
          max-width: 100%;
          text-align: center;
        }
        .card-container .round {
          border: 1px solid #03bfcb;
          border-radius: 50%;
          padding: 7px;
          width: 98px;
          height: 98px;
        }
        button.primary {
          background-color: #03bfcb;
          border: 1px solid #03bfcb;
          border-radius: 3px;
          color: #231e39;
          font-family: Montserrat, sans-serif;
          font-weight: 400;
          padding: 5px 15px;
          margin: 10px;
          cursor: pointer;
        }
        button.primary:hover {
          background-color: #03becb5b;
          color: #fff;
          border: 1px solid #0321cb;
        }
        button.primary.ghost {
          background-color: transparent;
          color: #02899c;
        }
      }
    `,
  ],
})
export class AccountProfileComponent {
    dataName:any;
}
