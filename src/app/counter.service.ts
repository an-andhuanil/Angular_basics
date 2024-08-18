import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { increment } from './store/counter.action';

@Injectable({providedIn: 'root'})
export class CounterService {
  counter = 0;
  counterChanged = new Subject<number>();

  constructor(private store : Store){}
  increment() {
    // this.counter++;
    // this.counterChanged.next(this.counter)
    this.store.dispatch(increment({value : 2}))
  }

  decrement() {
    // this.counter--;
    // this.counterChanged.next(this.counter)
  }
}
