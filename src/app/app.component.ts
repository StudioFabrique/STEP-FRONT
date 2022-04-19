import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IPartenaires } from './interfaces/ipartenaires';
import { PartenairesService } from './services/partenaires.service';

  // declare ga as a function to set and sent the events
  declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Step';

   partenaires: IPartenaires[] = []

  shouldShowBreadcrumb:boolean = false;
  showPartenaires:boolean = false;

  constructor(private router: Router,  public partenaireServ: PartenairesService) {

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((e: RouterEvent) => {
      this.shouldShowBreadcrumb = e.url != '/' && e.url != '/accueil' && e.url != '/contact' && e.url != '/metiers' && e.url != '/missions' && e.url != '/eco-conception' && e.url != '/mentions-legales';
      this.showPartenaires = e.url != '/missions/partenaires' && e.url != '/mentions-legales';
     
  
      
      });
      
  }

  ngOnInit() {

    document.body.classList.add('light-theme')


      this.setUpAnalytics();     
      this.partenaireServ.getPartenaires$().subscribe(
        res => {
          this.partenaires = res;         
        }
      )
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
