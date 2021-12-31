import { Component, OnInit } from '@angular/core';
import { ICardsInfo } from 'src/app/interfaces/icards';
import { AccueilCardsService } from 'src/app/services/accueil-cards.service';



@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.css']
})
export class InfoCardsComponent implements OnInit {

  cardsInfo: ICardsInfo[] = [];

  pourcentage = false;
 
  constructor(public cardsServ: AccueilCardsService) { }

  ngOnInit(): void {
    this.cardsServ.getCardsInfo$();
  
  }



}
