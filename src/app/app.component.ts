import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <div>
    <router-outlet></router-outlet>
  </div>
`,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'first-project';
}
