import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { take,  } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{ 

  private firstSubcription : Subscription;

  constructor() { }


  

  ngOnInit() {
    // const numbers = interval(1000);

    // const takeFourNumbers = numbers.pipe(take(1000));

    // takeFourNumbers.subscribe(x => console.log('Next: ', x));

    
    // this.firstSubcription = interval(1000).subscribe( count => {
    //     console.log(count);
    // })

    const customIntervalObserver = Observable.create(observer =>{
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count >3){
          observer.complete();
        }
        count++;
      }, 1000);
    });

    this.firstSubcription = customIntervalObserver.subscribe(data =>{
      console.log(data);
    },error=>{
      console.log(error);
    },()=>{
      console.log("completed");
    });
  }


  ngOnDestroy(): void {
    this.firstSubcription.unsubscribe();
  }
}
