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
        environment.JSONBinFiles.MetiersDetailsFormationsLongues
      )
      .subscribe((data: any) => {
        this.metierDetailsHeaders = data;
      });
  }

  getFormationsCourtes() {
    this.httpServiceMetierHeader
      .get(
        environment.JSONBinFiles.MetiersDetailsFormationsCourtes
      )
      .subscribe((data: any) => {
        this.metierDetailsHeaders = data;
      });
  }

  getFormationsInclusion() {
    this.httpServiceMetierHeader
      .get(
        environment.JSONBinFiles.MetiersDetailsFormationsInclusion
      )
      .subscribe((data: any) => {
        this.metierDetailsHeaders = data;
      });
  }

  getNumerisation() {
    this.httpServiceMetierHeader
      .get(
        environment.JSONBinFiles.MetiersDetailsNumerisation
      )
      .subscribe((data: any) => {
        this.metierDetailsHeaders = data;
      });
  }

  getEditique() {
    this.httpServiceMetierHeader
      .get(
        environment.JSONBinFiles.MetiersDetailsEditique
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
        environment.JSONBinFiles.MetiersDetailsDevWeb
      )
      .subscribe((data: any) => {
        this.metierDetailsHeaders = data;
      });
  }

  getApplicationsMobiles() {
    this.httpServiceMetierHeader
      .get(
        environment.JSONBinFiles.MetiersDetailsDevMobile
      )
      .subscribe((data: any) => {
        this.metierDetailsHeaders = data;
      });
  }

  getAssistance() {
    this.httpServiceMetierHeader
      .get(
        environment.JSONBinFiles.MetiersDetailsAssistance
      )
      .subscribe((data: any) => {
        this.metierDetailsHeaders = data;
      });
  }

  getMateriels() {
    this.httpServiceMetierHeader
    .get(
      environment.JSONBinFiles.MetiersDetailsRecondition
    )
      .subscribe((data: any) => {
        this.metierDetailsHeaders = data;
      });
  }
}
