import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ISliderAccueil } from '../interfaces/islider-accueil';

@Injectable({
  providedIn: 'root'
})
export class SliderAccueilService {

  sliderAccueil: ISliderAccueil[] = [];

  constructor(private sliderAccueilServ: HttpClient) { }

  getSliderAccueil$(): Observable<ISliderAccueil[]>{
    return this.sliderAccueilServ.get<ISliderAccueil[]>(environment.JSONBinFiles.SliderAccueilCarousel);
  }

}
