import { Component, OnInit } from '@angular/core';

export interface Card {
  content: string,
  number: number,
  icon: string,
  bg: string,
  pourcentage: boolean
}


@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.css']
})
export class InfoCardsComponent implements OnInit {

  constructor() { }

  pourcentage = false;
  // if pourcentage ? " " ! ""

  ngOnInit(): void {
  }


  cards: Card[] = [
    {'content': 'postes d’insertion créés depuis 2001', 'icon':'/assets/svg/stack_white.svg', 'number': 200, 'bg':'step-blue', 'pourcentage': false}, 

    {'content': 'des personnes trouvent un emploi durable 6 mois après la fin de leur contrat chez STEP ', 'icon':'/assets/svg/stack_white.svg', 'number': 60, 'bg':'step-green', 'pourcentage':true}, 

    {'content': 'des ressources STEP sont issues de son activité économique traditionnelle.' , 'bg':'step-orange','icon':'/assets/svg/stack_white.svg', 'number': 93, 'pourcentage': true}
  ]

}
