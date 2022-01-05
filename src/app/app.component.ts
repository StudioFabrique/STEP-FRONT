import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

  // declare ga as a function to set and sent the events
  declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Step';


  constructor(private router: Router) {
  }

  ngOnInit() {
      this.setUpAnalytics();     
  }

  setUpAnalytics() {
      this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
          .subscribe((event) => {
            gtag('config', 'G-68BRV56CC2' ,
                  {
                      'page_path': event.urlAfterRedirects                      
                  }
              );
          });
  }
}
