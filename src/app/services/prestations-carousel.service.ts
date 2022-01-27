import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { IprestationsCarousel } from '../interfaces/iprestations-carousel';

@Injectable({
  providedIn: 'root'
})
export class PrestationsCarouselService {

  prestationsDetails: IprestationsCarousel[] = [];

  constructor(private httpService: HttpClient) { }

  getPrestations() {
    // this.httpService.get('/assets/data/prestations-carousel/prestations-carousel-fluxdoc.json')
    this.httpService.get(environment.JSONBinFiles.PrestationsCarouselFluxdoc)
    .subscribe((data: any) => {
      this.prestationsDetails = data;
    });
  }

  getPrestationsStudio() {
    // this.httpService.get('/assets/data/prestations-carousel/prestations-carousel-studio.json')
    this.httpService.get(environment.JSONBinFiles.PrestationsCarouselStudio)
    .subscribe((data: any) => {
      this.prestationsDetails = data;
    });
  }


  getPrestationsAtelier() {
    // this.httpService.get('/assets/data/prestations-carousel/prestations-carousel-atelier.json')
    this.httpService.get(environment.JSONBinFiles.PrestationsCarouselAtelier)
    .subscribe((data: any) => {
      this.prestationsDetails = data;
    });
  }


  getPrestationsFormations() {
    // this.httpService.get('/assets/data/prestations-carousel/prestations-carousel-formations.json')
    this.httpService.get(environment.JSONBinFiles.PrestationsCarouselFormations)
    .subscribe((data: any) => {
      this.prestationsDetails = data;
    });
  }
  }