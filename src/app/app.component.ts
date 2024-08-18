import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService:UsersService){}
  
  onSetToInactive(id: number) {
    // this.userService.activeUsers(id);
  }

  onSetToActive(id: number) {
   
  }
}
