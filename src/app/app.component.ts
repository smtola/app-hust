import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';

  doempty:any;
  ngOnIt() {
    this.doempty="dsakfklkjasjlfkdja";
  }
  openModal(){
    console.log()
    this.doempty="dsakfklkjasjlfkdja";
    $('#myModal').modal('show');
  }
}
