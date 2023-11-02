import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
        <div class="container">
          <div class="row">
            <div class="left" style="background-color:#bbb;">
              <h2>Menu</h2>
              <input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." title="Type in a category">
              <ul id="myMenu">
                <li><a href="https://smtola.github.io/bindings/">Buil-in Directive</a></li>
                <li><a href="https://smtola.github.io/angularRouterServices/">Router Hook</a></li>
                <li><a href="https://smtola.github.io/angularHttp/">HTTP</a></li>
                <li><a href="https://smtola.github.io/AngularFirebase/">Angular Firebase</a></li>
                <li><a href="https://smtola.github.io/lifecycle/">LifeCycle</a></li>
                <li><a href="https://smtola.github.io/viewECS/">View Encapsulation</a></li>
                <li><a href="https://smtola.github.io/angularSH/">Sharing Data</a></li>
              </ul>
            </div>

            <div class="right" style="background-color:#000000;">
              <app-background></app-background>
            </div>
          </div>
        </div>
  `,
  styles: [`
    .container{
      display: grid;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    /* Create a column layout with Flexbox */
    .row {
      display: flex;
    }

    /* Left column (menu) */
    .left {
      flex: 35%;
      padding: 15px 0;
    }

    .left h2 {
      padding-left: 8px;
    }

    /* Right column (page content) */
    .right {
      display: grid;
      justify-content: center;
      align-items: center;
      padding: 1rem 10rem;
    }

    /* Style the search box */
    #mySearch {
      width: 100%;
      font-size: 18px;
      padding: 11px;
      border: 1px solid #ddd;
    }

    /* Style the navigation menu inside the left column */
    #myMenu {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    #myMenu li a {
      padding: 12px;
      text-decoration: none;
      color: black;
      display: block
    }

    #myMenu li a:hover {
      background-color: #eee;
    }
  `]
})
export class MenuComponent {

}
