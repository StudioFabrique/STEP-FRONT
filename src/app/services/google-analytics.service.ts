import { Injectable } from '@angular/core';

declare let gtag:Function;

@Injectable({
  providedIn: 'root'
})


export class GoogleAnalyticsService {

  constructor() { }

// public eventEmitter function which will  run gtag 
// when it’s called and ensure that  formatting is correct 
// and in the way that’s required b

  public eventEmitter( 
    eventName: string, 
    eventSubject: string[], 
    eventAction: string){ 
         gtag('event', eventName, { 
                eventName: eventName, 
                 eventSubject: eventSubject, 
                 eventAction: eventAction
               });
    }
}
