import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISliderAccueil } from '../interfaces/islider-accueil';

@Injectable({
  providedIn: 'root'
})
export class SliderAccueilService {

  sliderAccueil: ISliderAccueil[] = [];

  constructor(private sliderAccueilServ: HttpClient) { }

  getSliderAccueil$(): Observable<ISliderAccueil[]>{
    return this.sliderAccueilServ.get<ISliderAccueil[]>('http://localhost:4200/assets/data/accueil/slider-carousel.json');
  }

}
