import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMetierDetailsHeaders } from '../interfaces/imetier-details-headers';

@Injectable({
  providedIn: 'root'
})
export class MetiersDetailsHeadersService {

  metierDetailsHeaders: IMetierDetailsHeaders[] = [];

  constructor(private httpServiceMetierHeader: HttpClient) { }

  getFormationsLongues(){
    this.httpServiceMetierHeader.get('http://localhost:4200/assets/data/metier-details-headers/metier-details-headers-formationsLongues.json').subscribe((data:any) => {
      this.metierDetailsHeaders = data;
      console.log("data", this.metierDetailsHeaders);
    });
  }

  getFormationsCourtes(){
    this.httpServiceMetierHeader.get('http://localhost:4200/assets/data/metier-details-headers/metier-details-headers-formationsCourtes.json').subscribe((data:any) => {
      this.metierDetailsHeaders = data;
      console.log("data", this.metierDetailsHeaders);
    });
  }

  getNumerisation(){
    this.httpServiceMetierHeader.get('http://localhost:4200/assets/data/metier-details-headers/metier-details-headers-numerisation.json').subscribe((data:any) => {
      this.metierDetailsHeaders = data;
      console.log("data", this.metierDetailsHeaders);
    });
  }

  getEditique(){
    this.httpServiceMetierHeader.get('http://localhost:4200/assets/data/metier-details-headers/metier-details-headers-editique.json').subscribe((data:any) => {
      this.metierDetailsHeaders = data;
      console.log("data", this.metierDetailsHeaders);
    });
  }

  getTraitementDonnees(){
    this.httpServiceMetierHeader.get('http://localhost:4200/assets/data/metier-details-headers/metier-details-headers-traitementDonnees.json').subscribe((data:any) => {
      this.metierDetailsHeaders = data;
      console.log("data", this.metierDetailsHeaders);
    });
  }

  getApplicationsWeb(){
    this.httpServiceMetierHeader.get('http://localhost:4200/assets/data/metier-details-headers/metier-details-headers-applicationsWeb.json').subscribe((data:any) => {
      this.metierDetailsHeaders = data;
      console.log("data", this.metierDetailsHeaders);
    });
  }

  getApplicationsMobiles(){
    this.httpServiceMetierHeader.get('http://localhost:4200/assets/data/metier-details-headers/metier-details-headers-applicationsMobiles.json').subscribe((data:any) => {
      this.metierDetailsHeaders = data;
      console.log("data", this.metierDetailsHeaders);
    });
  }

  getAssistance(){
    this.httpServiceMetierHeader.get('http://localhost:4200/assets/data/metier-details-headers/metier-details-headers-atelier-assistance.json').subscribe((data:any) => {
      this.metierDetailsHeaders = data;
      console.log("data", this.metierDetailsHeaders);
    });
  }

  getMateriels(){
    this.httpServiceMetierHeader.get('http://localhost:4200/assets/data/metier-details-headers/metier-details-headers-atelier-materiels.json').subscribe((data:any) => {
      this.metierDetailsHeaders = data;
      console.log("data", this.metierDetailsHeaders);
    });
  }
}
