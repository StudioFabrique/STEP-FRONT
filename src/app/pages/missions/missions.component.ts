import { Component, OnInit } from '@angular/core';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { PartenairesService } from 'src/app/services/partenaires.service';


export interface Card {
  content: string,
  title: string,
  bg: string,
  lien: string
}


@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {

  partenaires: IPartenaires[] = []

  constructor(public partenaireServ: PartenairesService) {}

 
  image="../../../assets/corners/white_yellow.png" 
  title="Découvrez nos missions " 
  accroche="20 ans d’innovation au service de l’inclusion" 
  text="STEP depuis deux décennies ne cesse de se réinventer en diversifiant ses activités et ses engagements" 
  bg="/assets/img/component-items-header/missions/mission_header.jpg"






  ngOnInit(): void {

    

    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res;
        console.log(res);
        
      }
    );

  }

  cards: Card[] = [
    {'title':`Raison d'être`, 'content': '«Personne n’est inemployable» tel est notre credo!', 'bg':'/assets/missions/gouvernance.jpg', 'lien':'./raison-d-etre' }, 
    {'title':'Nos Valeurs', 'content': 'Une histoire qui dure depuis 20 ans', 'bg':'/assets/missions/valeurs.jpg', 'lien':'./valeurs'}, 
    {'title':'Partenaires', 'content': 'Ils nous font confiance… et nous aussi' ,'bg':'/assets/missions/partenaires.jpg', 'lien':'./partenaires'}
  ]

}
