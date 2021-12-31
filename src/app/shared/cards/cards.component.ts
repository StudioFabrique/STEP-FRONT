import { Component, OnInit } from '@angular/core';
import { ICards } from 'src/app/interfaces/icards';
import { AccueilCardsService } from 'src/app/services/accueil-cards.service';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: ICards[] = [];


  constructor(public cardsServ: AccueilCardsService) { }

  ngOnInit(): void {
    this.cardsServ.getCards$();
  
  }

}
