import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  template: `
    <!-- Navbar -->
    <nav class="navbar">
      <div class="container">
        <div class="logo">
          <a routerLink="">
            <img src="./assets/img/logo.png" alt="logo" />
            <h1>Core Security</h1>
          </a>
        </div>
        <ul>
          <li>
          <input type="search" name="search" placeholder="Search"  [(ngModel)]="searchChangesValueText" (input)=" onSearchValueText()">
          </li>
          <li>
            <a routerLink="/account-profile">
              <h2>Username</h2>
            </a>
          </li>
          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">
              <fa-icon [icon]="user" class="icon"></fa-icon
            ></a>
            <div class="dropdown-content">
              <a routerLink="/account-profile">Personal</a>
              <a routerLink="/forget-psw">Reset password</a>
              <a routerLink="/login">Log out</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <!-- End Navbar -->
  `,
  styles: [
    `
      .navbar {
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 0;
        width: 100%;
        height: auto;
        background-color: #2c633c;
        z-index: 2;
      }
      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
      }
      .logo a {
        text-decoration: none;
        display: flex;
        align-items: center;
      }
      .logo a > img {
        width: 55px;
        height: 55px;
      }
      .logo a > h1 {
        text-transform: uppercase;
        color: #fff;
        padding: 0 0.7rem;
        font-size: 1.2rem;
      }

      ul {
        list-style-type: none;
        overflow-x: hidden;
        padding: 0;
        margin: 0;
      }
      li {
        display: inline-block;
        justify-content: center;
        align-items: center;
      }
      li h2 {
        color: #ffffff;
        font-size: 16px;
      }
      li .icon {
        font-size: 18px;
      }
      li .icon:hover {
        opacity: 0.5;
      }
      li a,
      .dropbtn {
        display: inline-block;
        color: #fff;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      li .dropdown {
        display: inline-block;
      }

      li .dropdown-content {
        display: none;
        position: absolute;
        right: 3rem;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        border-radius: 5px;
      }
      .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
      }

      .dropdown-content a:hover {
        background-color: #f1f1f1;
        border-radius: 5px;
      }

      .dropdown:hover .dropdown-content {
        display: block;
      }
      @media screen and (max-width: 768px) {
        .logo a > img {
          width: 45px;
          height: 45px;
        }
        .logo a > h1 {
          text-transform: uppercase;
          color: #fff;
          padding: 0 0.7rem;
          font-size: 1rem;
        }
        li h2 {
          display: none;
        }
      }
      input[type="search"]{
        border-radius: 4px;
         padding:5px 10px;
         outline:none;
         border:none;
         transition: all 0.5s ease;
      }
      input[type="search"]:hover{
        border:blue 1px solid;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  user = faUser;
  searchChangesValueText:string = '';

  @Output() searchValueTextEvent: EventEmitter<string> = new EventEmitter<string>();

  onSearchValueText(){
    this.searchValueTextEvent.emit(this.searchChangesValueText);
    // console.log(this.searchChangesValueText);
  }
 
}
