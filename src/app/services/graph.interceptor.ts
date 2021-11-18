import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { ConnexionService } from './connexion.service';

@Injectable()
export class GraphInterceptor implements HttpInterceptor {

  entetes:any;

  constructor(private conServ:ConnexionService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Réécriture des entêtes si un token existe
    if (this.conServ.config?.apikey) {
      this.entetes = {
        headers: req.headers
          .set('Content-Type', 'application/json')
          // .set('Authorization', 'Bearer ' + this.conServ.config.apikey)
          .set('x-api-key', this.conServ.config.apikey)
      }
    }
    else {
      this.entetes = {
        headers: req.headers.set('Content-Type', 'application/json')
      }
    }
    const authReq = req.clone(this.entetes);

    // Envoyer la nouvelle requête
    return next.handle(authReq)
      .pipe(
        catchError((erreur) => {
          console.log("Une erreur s'est produite");
          console.log(erreur); // Récupérer les erreurs et les affichers
          // return Observable.throw(erreur); // Renvoyer l'erreur
          return throwError(erreur)
        })) as any;
  }
}
