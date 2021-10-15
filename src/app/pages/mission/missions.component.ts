import { Component, OnInit } from '@angular/core';


export interface Card {
  content: string,
  title: string,
  bg: string
}

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gridColumns = 3;

  cards: Card[] = [
    {'title':'Step', 'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit stomer krashinko.', 'bg':'../../../assets/missions/step.jpg'}, 
    {'title':'Gouvernance', 'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit dolor sit.', 'bg':'../../../assets/missions/gouvernance.jpg' }, 
    {'title':'Partenaires', 'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit stakced chart.' ,'bg':'../../../assets/missions/partners.jpg'}
  ]
}
