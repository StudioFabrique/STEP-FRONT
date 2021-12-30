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


  ngOnInit(): void {
  }


  cards: Card[] = [
    {'content': 'postes d’insertion créés et accompagnés depuis 2001 sur l’ensemble de nos pôles.', 'icon':'assets/svg/white_icons/stack.svg', 'number': 200, 'bg':'step-blue', 'pourcentage': false}, 

    {'content': 'des personnes trouvent un emploi durable 6 mois après la fin de leur contrat chez STEP ', 'icon':'/assets/svg/white_icons/camembert.svg', 'number': 60, 'bg':'step-green', 'pourcentage':true}, 

    {'content': 'des ressources STEP sont issues de son activité économique traditionnelle.' , 'bg':'step-orange','icon':'/assets/svg/white_icons/stats.svg', 'number': 93, 'pourcentage': true}
  ]

}
