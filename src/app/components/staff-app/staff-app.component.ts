import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-staff-app',
  templateUrl: './staff-app.component.html',
  styleUrls: ['./staff-app.component.css']
})
export class StaffAppComponent {
  user = faUser
}
