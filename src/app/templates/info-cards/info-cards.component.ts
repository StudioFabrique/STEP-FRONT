import { Component, OnInit } from '@angular/core';

export interface Card {
  content: string,
  title: string,
  icon: string,
  bg: string
}


@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.css']
})
export class InfoCardsComponent implements OnInit {

  gridColumns = 3;

  constructor() { }

  ngOnInit(): void {
  }


  cards: Card[] = [
    {'content': 'postes d’insertion créés depuis 2001', 'icon':'stacked_bar_chart', 'title': '200', 'bg':'step-blue'}, 
    {'content': 'des personnes trouvent un emploi durable 6 mois après la fin de leur contrat chez STEP ', 'icon':'layers', 'title': '60%', 'bg':'step-green'}, 
    {'content': 'des ressources STEP sont issues de son activité économique traditionnelle.' , 'bg':'step-orange','icon':'legend_toggle', 'title': '93%'}
  ]

}
