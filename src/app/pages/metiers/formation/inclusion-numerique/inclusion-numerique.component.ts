import { Component, OnInit } from '@angular/core';
import { IMetierDetailsHeaders } from 'src/app/interfaces/imetier-details-headers';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';
import { PartenairesService } from 'src/app/services/partenaires.service';
import { ThumbscarouselService } from 'src/app/services/thumbscarousel.service';

@Component({
  selector: 'app-inclusion-numerique',
  templateUrl: './inclusion-numerique.component.html',
  styleUrls: ['./inclusion-numerique.component.css']
})
export class InclusionNumeriqueComponent implements OnInit {

  formations: IMetierDetailsHeaders[] = [];
  partenaires: IPartenaires[] = [];


  constructor(
    public metierDetailsHeadersServ:MetiersDetailsHeadersService, 
    public thumbsServ: ThumbscarouselService,
    public partenaireServ: PartenairesService) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getFormationsInclusion();
    this.thumbsServ.getImgThumbsInclusion();


    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res;
        console.log(res);
        
      }
    )
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
