import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoggingInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler){
    // throw new Error('Method not implemented.');
    console.log('out going request',req);
    console.log(req.url);
    return next.handle(req).pipe(tap((event) => {
      if(event.type === HttpEventType.Response){
        console.log("incoming response");
        console.log(event.body);
      }
    }));
  }
}
