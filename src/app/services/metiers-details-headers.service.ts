import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import {
  IMetierDetailsHeaders,
  IMetiersList,
} from '../interfaces/imetier-details-headers';

@Injectable({
  providedIn: 'root',
})
export class MetiersDetailsHeadersService {
  metierDetailsHeaders: IMetierDetailsHeaders[] = [];
  metiersList: IMetiersList[] = [];

  constructor(private httpServiceMetierHeader: HttpClient) {}

  getMetiers$() {
    this.httpServiceMetierHeader
      .get(environment.JSONBinFiles.SolutionSliderSection)
      .subscribe((data: any) => {
        this.metiersList = data;
      });
  }

  getFormationsLongues() {
    this.httpServiceMetierHeader
      .get(
        '/assets/data/metier-details-headers/metier-details-headers-formationsLongues.json'
      )
      .subscribe((data: any) => {
        this.metierDetailsHeaders = data;
      });
  }

  getFormationsCourtes() {
    this.httpServiceMetierHeader
      .get(
        '/assets/data/metier-details-headers/metier-details-headers-formationsCourtes.json'
      )
      .subscribe((data: any) => {
        this.metierDetailsHeaders = data;
      });
  }

  getFormationsInclusion() {
    this.httpServiceMetierHeader
      .get(
        '/assets/data/metier-details-headers/metier-details-headers-inclusion.json'
      )
      .subscribe((data: any) => {
        this.metierDetailsHeaders = data;
      });
  }

  getNumerisation() {
    this.httpServiceMetierHeader
      .get(
        '/assets/data/metier-details-headers/metier-details-headers-numerisation.json'
      )
      .subscribe((data: any) => {
        this.metierDetailsHeaders = data;
      });
  }

  getEditique() {
    this.httpServiceMetierHeader
      .get(
        '/assets/data/metier-details-headers/metier-details-headers-editique.json'
      )
      .subscribe((data: any) => {
        this.metierDetailsHeaders = data;        
      });
  }

  getTraitementDonnees() {
    this.httpServiceMetierHeader
      .get(
        environment.JSONBinFiles.MetiersDetailsTraitementDeDonnees
      )
      .subscribe((data: any) => {
        this.metierDetailsHeaders = data;
      });
  }

  getApplicationsWeb() {
    this.httpServiceMetierHeader
      .get(
        '/assets/data/metier-details-headers/metier-details-headers-applicationsWeb.json'
      )
      .subscribe((data: any) => {
        this.metierDetailsHeaders = data;
      });
  }

  getApplicationsMobiles() {
    this.httpServiceMetierHeader
      .get(
        '/assets/data/metier-details-headers/metier-details-headers-applicationsMobiles.json'
      )
      .subscribe((data: any) => {
        this.metierDetailsHeaders = data;
      });
  }

  getAssistance() {
    this.httpServiceMetierHeader
      .get(
        '/assets/data/metier-details-headers/metier-details-headers-atelier-assistance.json'
      )
      .subscribe((data: any) => {
        this.metierDetailsHeaders = data;
      });
  }

  getMateriels() {
    this.httpServiceMetierHeader
      .get(
        '/assets/data/metier-details-headers/metier-details-headers-atelier-materiels.json'
      )
      .subscribe((data: any) => {
        this.metierDetailsHeaders = data;
      });
  }
}
