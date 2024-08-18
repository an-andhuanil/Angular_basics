import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnInit{
  
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


  @Output() intervalFires= new EventEmitter<number>();
  interval;
  lastNumber = 0;

  onStartGame(){
    console.log('game Started')
    this.interval = setInterval(() =>{
      this.intervalFires.emit(this.lastNumber + 1);
      this.lastNumber++;
    },1000);
  }

  onPauseGame(){
    clearInterval(this.interval);
  }

}
