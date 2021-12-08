import { Component, OnInit } from '@angular/core';
import { IMetierDetailsHeaders } from 'src/app/interfaces/imetier-details-headers';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';
import { ThumbscarouselService } from 'src/app/services/thumbscarousel.service';

@Component({
  selector: 'app-courtes',
  templateUrl: './courtes.component.html',
  styleUrls: ['./courtes.component.css']
})
export class CourtesComponent implements OnInit {

  formations: IMetierDetailsHeaders[] = [];

  constructor(public metierDetailsHeadersServ:MetiersDetailsHeadersService, public thumbsServ: ThumbscarouselService) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getFormationsCourtes();
    this.thumbsServ.getImgThumbsFormationsCourtes();
  }





  articles= [
    {
      column: `La Fabrique du Numérique Paloise propose également des formations courtes (3 à 5 jours) sur la transformation numérique et l’utilisation des réseaux sociaux professionnels en partenariat avec une start-up de
      Dordogne, la Wab, spécialiste du digital coopératif. 
      Nous travaillons avec eux pour l’organisation de formations courtes pour accompagner la transformation numérique ainsi que sur le développement de formations digitales. 
      `,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
    }
  ];

}
