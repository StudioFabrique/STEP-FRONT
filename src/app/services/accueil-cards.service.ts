import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ICards, ICardsInfo } from '../interfaces/icards';

@Injectable({
  providedIn: 'root'
})
export class AccueilCardsService {


  cards: ICards[] = [];
  cardsInfo: ICardsInfo[] = [];

  
  constructor(private httpsServCards: HttpClient) { }


  getCards$() {
    this.httpsServCards.get(environment.JSONBinFiles.AccueilCards).subscribe((data: any) => {
      this.cards = data;
    });
  }

  getCardsInfo$() {
    this.httpsServCards.get(environment.JSONBinFiles.AccueilCardsInfo).subscribe((data: any) => {
      this.cardsInfo = data;
    });
  }



  // getCards$() {
  //   this.httpsServCards.get('/assets/data/cards/cards.json').subscribe((data: any) => {
  //     this.cards = data;
  //   });
  // }

  // getCardsInfo$() {
  //   this.httpsServCards.get('/assets/data/cards/cardsInfo.json').subscribe((data: any) => {
  //     this.cardsInfo = data;
  //   });
  // }

  

}
