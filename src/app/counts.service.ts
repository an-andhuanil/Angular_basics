import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountsService {


  activeToInactiveCount = 0;
  inactiveToInactiveCount = 0;

  constructor() { }

  incActiveCount(){
    this.activeToInactiveCount++;
    console.log(this.activeToInactiveCount)
  }
  incinActiveCount(){
    this.inactiveToInactiveCount++;
    console.log(this.inactiveToInactiveCount)
  }
}
