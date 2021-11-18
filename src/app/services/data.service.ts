import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AccueilComponent } from '../pages/accueil/accueil.component';
import { ContactsComponent } from '../pages/contacts/contacts.component';
import { MetiersComponent } from '../pages/metier/metiers.component';
import { GouvernanceComponent } from '../pages/mission/gouvernance/gouvernance.component';
import { MissionsComponent } from '../pages/mission/missions.component';
import { PartenairesComponent } from '../pages/mission/partenaires/partenaires.component';
import { ValeursComponent } from '../pages/mission/valeurs/valeurs.component';
import { ConnexionService } from './connexion.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  routes: any = [];

  constructor(private router: Router, private http: HttpClient, private conServ:ConnexionService) {
  }
  /** Récupérer les paramètres de configuration */
  getConfig(){
    this.http.get('assets/config.json').subscribe(conf => {
      this.conServ.config = conf;
      console.log(this.conServ.config);
    });
  }
  /** Avoir la liste de menus depuis Amplify */
  getMenu() {
    return this.http
      .get(
        'https://mvxfcpog63.execute-api.us-east-1.amazonaws.com/step/get-menu'
      )
      .subscribe((res: any) => {
        this.routes = res;
        console.log(this.routes);

        this.routes = this.routes
          .sort((a: any, b: any) => {
            if (a.menu_order < b.menu_order) return -1;
            if (a.menu_order < b.menu_order) return 1;
            return 0;
          })
          .map((item: any) => {
            let route;
            if (item.menu_default) {
              route = {
                path: '',
                pathMatch: 'full',
                redirectTo: item.menu_name,
              };
              this.router.config.unshift(route);
            }
            route = { path: item.menu_name, component: item.menu_name };
            this.router.config.unshift(
              this.setRoute({ path: item.menu_name, component: '' })
            );
            console.log(this.router.config);
            console.log(item.menu_component);
          });
      });
  }

  setRoute(route: { path: string; component: any }): Route {
    switch (route.path) {
      case 'accueil':
        route.component = AccueilComponent;
        break;
      case 'missions':
        route.component = MissionsComponent;
        break;
      case 'metiers':
        route.component = MetiersComponent;
        break;

      case 'metiers/gouvernance':
        route.component = GouvernanceComponent;
        break;

      case 'metiers/valeurs':
        route.component = ValeursComponent;
        break;

      case 'metiers/partenaires':
        route.component = PartenairesComponent;
        break;
      case 'contacts':
        route.component = ContactsComponent;
        break;
    }
    console.log(route);

    return route as Route;
  }
}
