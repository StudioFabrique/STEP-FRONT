import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICards, ICardsInfo } from '../interfaces/icards';

@Injectable({
  providedIn: 'root'
})
export class AccueilCardsService {


  cards: ICards[] = [];
  cardsInfo: ICardsInfo[] = [];

  
  constructor(private httpsServCards: HttpClient) { }


  getCards$() {
    this.httpsServCards.get('/assets/data/cards/cards.json').subscribe((data: any) => {
      this.cards = data;
      console.log("dataCards", this.cards);
    });
  }

  getCardsInfo$() {
    this.httpsServCards.get('/assets/data/cards/cardsInfo.json').subscribe((data: any) => {
      this.cardsInfo = data;
      console.log("dataInfoCards", this.cardsInfo);
    });
  }

  

}
