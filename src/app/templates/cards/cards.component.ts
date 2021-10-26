import { Component, OnInit } from '@angular/core';

export interface Card {
  content: string,
  title: string,
  icon: string
}



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  gridColumns = 3;

  constructor() { }

  ngOnInit(): void {
  }




  cards: Card[] = [
    {
      'content': 'Depuis 20 ans, l’ADN de STEP - entreprise citoyenne et responsable- c’est de construire des parcours inclusifs, par la production de services innovants, ou par la formation, à destination des entreprises et des collectivités.',
     'icon':'chat_bubble_outline',
      'title': 'Une entreprise citoyenne...'
    }, 
    {
      'content': 'Nous ne sommes pas nés d’hier et nous savons que demain la solidarité sera la norme. Agir au service des territoires, donner la chance d’avoir une seconde chance – et même une première chance – est notre métier.',
      'icon':'chat_bubble_outline',
      'title': '...au service du territoire'
    }, 
    {
      'content': 'STEP veut être une passerelle vers l’emploi durable, et surtout la confiance retrouvée.', 
    'icon':'chat_bubble_outline', 
    'title': 'Une passerelle vers l’emploi et la confiance retrouvée !'
    }
  ]

}
