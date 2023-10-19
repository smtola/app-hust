import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  template: `
    <app-navbar></app-navbar>

    <!-- Section -->
    <section class="section">
      <div class="container-fluid">
        <div class="content">
          <a href="#">
            <img src="./assets/img/security.png" alt="Core Security System" />
          </a>
          <h2>Core Security</h2>
        </div>
        <div class="content">
          <a href="#">
            <img src="./assets/img/invoice.png" alt="invoice" />
          </a>
          <h2>Invoice</h2>
        </div>
        <div class="content">
          <a href="#">
            <img src="./assets/img/nat.png" alt="NAT" />
          </a>
          <h2>NATT</h2>
        </div>
        <div class="content">
          <a href="#">
            <img src="./assets/img/nat.png" alt="NAT Local" />
          </a>
          <h2>NATT (local)</h2>
        </div>
        <div class="content">
          <a href="#">
            <img
              src="./assets/img/resource-system.png"
              alt="Human resource system"
            />
          </a>
          <h2>Resource system</h2>
        </div>
        <div class="content">
          <a routerLink="./staff-app">
            <img src="./assets/img/staff.png" alt="Staff App" />
          </a>
          <h2>STAFF _APP</h2>
        </div>
        <div class="content">
          <a href="#">
            <img src="./assets/img/staff.png" alt="Staff App Local" />
          </a>
          <h2>STAFF _APP (Local)</h2>
        </div>
        <div class="content">
          <a href="#">
            <img src="./assets/img/utils.png" alt="UTILS" />
          </a>
          <h2>UTILS</h2>
        </div>
        <div class="content">
          <a href="#">
            <img src="./assets/img/utils-local.png" alt="UTILS Local" />
          </a>
          <h2>UTILS (Local)</h2>
        </div>
      </div>
    </section>
    <!-- End Section -->
  `,
  styles: [
    `
      .section {
        padding: 1.5rem;
      }
      .container-fluid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
      }
      .content {
        overflow-x: hidden;
        padding: 28px;
        background: #dedddd;
        border-radius: 5px;
        box-shadow: 0 4px 5px 0 rgba(52, 52, 52, 0.4);
        transition: all 0.4s ease;
      }
      .content:hover {
        transform: scale(1.03);
        box-shadow: 0 0 75px 5px rgba(0, 0, 0, 0.42);
      }
      .content img {
        width: 65px;
        height: 65px;
        transition: all 0.5s ease;
      }
      .content a {
        display: flex;
        justify-content: center;
      }
      .content img:hover {
        transform: scale(1.02);
      }
      .content > h2 {
        text-align: center;
        margin-top: 15px;
        font-size: 13px;
      }
      @media screen and (max-width: 576px) {
        .section {
          padding: 1rem;
        }
        .container-fluid {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(2, 1fr);
        }
        .content img {
          width: 8vh;
          height: 8vh;
          transition: all 0.5s ease;
        }
        .content a {
          display: flex;
          justify-content: center;
        }
        .content img:hover {
          transform: scale(1.02);
        }
        .content > h2 {
          text-align: center;
          margin-top: 15px;
          font-size: 12px;
        }
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  user = faUser;

  constructor() {}
  ngOnInit() {}
}
