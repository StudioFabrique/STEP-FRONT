import { Component, OnInit } from '@angular/core';

import { IPartenaires } from 'src/app/interfaces/ipartenaires';

import { PartenairesService } from 'src/app/services/partenaires.service';

@Component({
  selector: 'app-gouvernance',
  templateUrl: './gouvernance.component.html',
  styleUrls: ['./gouvernance.component.css']
})
export class GouvernanceComponent implements OnInit {
  
  partenaires: IPartenaires[] = []

  
  constructor(public partenaireServ: PartenairesService) {

  }
  
  ngOnInit(): void {

    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res; 
      }
    );  
  }

  bgColor = "#00B0CC"
  bgImg="/assets/img/component-items-header/missions/gouvernance_header.jpg"
  corner = "assets/corners/white_orange.png"
  title="« Personne n’est inemployable »" 
  accroche="Une feuille de route ouverte à tous pour garder le cap" 
  text="Il y a ceux qui disent, et ceux qui font. Chez STEP, nous faisons ce que nous disons ou plutôt nous testons en interne ce que nous préconisons. " 


  intro  = {
    "p1": `Il y a ceux qui disent, et ceux qui font. Chez STEP, nous faisons ce que nous disons ou plutôt nous testons en interne ce que nous préconisons à nos clients et partenaires : le respect de l’autre et de l’environnement au sens large pour donner du sens à nos missions et nos services tout en misant sur l’emploi et le réemploi.
Y a avoir cru il y a déjà vingt ans, nous donne une longueur d’avance et une légitimité. L'inventivité est notre point fort, rien n’est jamais impossible, et nous avons chaque jour de nouvelles idées.`

  }
 
  // CONTENT PAGE TEXT
  
  content = [
    {
      "headTitle":"« Personne n’est inemployable » ",
      "bodyText": `Depuis 20 ans, chaque jour et chaque personne qui est passée chez STEP le prouve. Si notre cœur de métier est la numérisation de documents et le traitement des données, le numérique n’est qu’un levier qui nous donne de nouvelles idées et de nouvelles perspectives de développement en faisant en sorte que nos projets et nos services non seulement soient cohérents avec nos valeurs, mais irriguent notre territoire et s’en inspirent pour désenclaver, ouvrir, lutter contre la précarité et la méfiance qu’elle incite.

Ce n’est pas une lubie, ce n’est pas mode, ce n’est ni un poids, c’est une cohérence, celle de croire en une seconde chance, pour les salariés, pour les clients qui ne savent pas toujours comment gérer leurs données et pour les matériels informatiques. Si on prend soin, si on répare, si on accompagne, on vit plus longtemps et mieux, et en plus on se sent utile.
      
Trouver sa place, faire sens, faire société ce n’est pas rien, c’est même indispensable. C’est ce qui nous anime.

C’est ce que nous nous efforçons de faire chaque jour, en le réinventant à l’échelle de notre territoire.`


  }]


  img = {
    gouvImg: "/assets/missions/gouv/gouv_body_img_1.jpg",
    gouvImg_2: "/assets/missions/gouv/gouv_body_img_2.jpg",
    title: "Gouvernance",
    alt: "Gouvernance"

  }



}
