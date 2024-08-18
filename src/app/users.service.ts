import { Injectable } from '@angular/core';
import { CountsService } from './counts.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private counterService: CountsService) { }

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  setActive(id: number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incActiveCount();
  }
  setInactive(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incinActiveCount();
  }
}
