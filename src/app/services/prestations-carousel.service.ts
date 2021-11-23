import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IprestationsCarousel } from '../interfaces/iprestations-carousel';

@Injectable({
  providedIn: 'root'
})
export class PrestationsCarouselService {

  prestationsDetails: IprestationsCarousel[] = [];

  constructor(private httpService: HttpClient) { }

  getPrestations() {
    this.httpService.get('http://localhost:4200/assets/data/prestations-carousel-fluxdoc.json').subscribe((data: any) => {
      this.prestationsDetails = data;
      console.log("data", this.prestationsDetails);
    });
  }

  getPrestationsStudio() {
    this.httpService.get('http://localhost:4200/assets/data/prestations-carousel-studio.json').subscribe((data: any) => {
      this.prestationsDetails = data;
      console.log("data", this.prestationsDetails);
    });
  }


  getPrestationsAtelier() {
    this.httpService.get('http://localhost:4200/assets/data/prestations-carousel-atelier.json').subscribe((data: any) => {
      this.prestationsDetails = data;
      console.log("data", this.prestationsDetails);
    });
  }


  getPrestationsFormations() {
    this.httpService.get('http://localhost:4200/assets/data/prestations-carousel-formations.json').subscribe((data: any) => {
      this.prestationsDetails = data;
      console.log("data", this.prestationsDetails);
    });
  }
  }