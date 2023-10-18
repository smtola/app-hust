import { Component } from '@angular/core';
import { faMailBulk} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forget-psw',
  templateUrl: './forget-psw.component.html',
  styleUrls: ['./forget-psw.component.css']
})
export class ForgetPswComponent {
  email = faMailBulk
}
