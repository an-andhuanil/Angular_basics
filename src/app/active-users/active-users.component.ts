import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users= this.usersService.activeUsers;
  }
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.usersService.setActive(id);
  }
}
