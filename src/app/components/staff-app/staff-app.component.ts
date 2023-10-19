import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-staff-app',
  template: `
    <app-navbar></app-navbar>

    <!-- Section -->
    <div class="cnt-staff-app">
      <div class="content-box-item">
        <a href="#">
          <img src="./assets/img/AppIcon/Whatsapp.png" alt="" />
        </a>
        <h1>WhatsApp</h1>
      </div>
      <div class="content-box-item">
        <a href="#">
          <img src="./assets/img/AppIcon/messenger.png" alt="" />
        </a>
        <h1>Messenger</h1>
      </div>
      <div class="content-box-item">
        <a href="#">
          <img src="./assets/img/AppIcon/slack.png" alt="" />
        </a>
        <h1>Slack</h1>
      </div>
      <div class="content-box-item">
        <a href="#">
          <img src="./assets/img/AppIcon/skype.png" alt="" />
        </a>
        <h1>Skype</h1>
      </div>
      <div class="content-box-item">
        <a href="#">
          <img src="./assets/img/AppIcon/gmail.png" alt="" />
        </a>
        <h1>Gmail</h1>
      </div>
      <div class="content-box-item">
        <a href="#">
          <img src="./assets/img/AppIcon/telegram.png" alt="" />
        </a>
        <h1>Telegram</h1>
      </div>
      <div class="content-box-item">
        <a href="#">
          <img src="./assets/img/AppIcon/android-message.png" alt="" />
        </a>
        <h1>Messages</h1>
      </div>
      <div class="content-box-item">
        <a href="#">
          <img src="./assets/img/AppIcon/google-calendar.png" alt="" />
        </a>
        <h1>Calendar</h1>
      </div>
      <div class="content-box-item">
        <a href="#">
          <img src="./assets/img/AppIcon/discord.png" alt="" />
        </a>
        <h1>Discord</h1>
      </div>
      <div class="content-box-item">
        <a href="#">
          <img src="./assets/img/AppIcon/hangout.png" alt="" />
        </a>
        <h1>Hangouts</h1>
      </div>
      <div class="content-box-item">
        <a href="#">
          <img src="./assets/img/AppIcon/linkedin.png" alt="" />
        </a>
        <h1>LinkedIn</h1>
      </div>
      <div class="content-box-item">
        <a href="#">
          <img src="./assets/img/AppIcon/tweetdesk.png" alt="" />
        </a>
        <h1>Tweetdeck</h1>
      </div>
      <div class="content-box-item">
        <a href="#">
          <img src="./assets/img/AppIcon/trello.png" alt="" />
        </a>
        <h1>Trello</h1>
      </div>
      <div class="content-box-item">
        <a href="#">
          <img src="./assets/img/AppIcon/office365-outlook.png" alt="" />
        </a>
        <h1>Outlook</h1>
      </div>
      <div class="content-box-item">
        <a href="#">
          <img src="./assets/img/AppIcon/google-keep.png" alt="" />
        </a>
        <h1>Google Keep</h1>
      </div>
      <div class="content-box-item">
        <a href="#">
          <img src="./assets/img/AppIcon/hangout.png" alt="" />
        </a>
        <h1>Hangout Chat</h1>
      </div>
    </div>
    <!-- End Section -->
  `,
  styles: [
    `
      /* Staff-App */

      .cnt-staff-app {
        padding: 1.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(156px, 1fr));
        gap: 1rem;
      }
      .content-box-item {
        display: grid;
        justify-content: center;
        align-content: center;
        background: #ececec;
        border-radius: 5px;
        padding: 1.5rem;
        transition: all 0.5s ease;
      }
      .content-box-item > a > img {
        width: 55px;
        height: 55px;
      }
      .content-box-item:hover {
        transform: scale(1.03);
      }
      .content-box-item a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .content-box-item > h1 {
        text-align: center;
        font-size: 14px;
        margin: 10px;
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
    `,
  ],
})
export class StaffAppComponent {
  user = faUser;
}
