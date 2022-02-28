import { Component, OnInit } from '@angular/core';
import { IMetierDetailsHeaders } from 'src/app/interfaces/imetier-details-headers';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { FirebaseImagesService } from 'src/app/services/firebase-images.service';
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
    public firebaseServ: FirebaseImagesService,
    public partenaireServ: PartenairesService) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getFormationsInclusion();
    this.firebaseServ.getInclusion$();


    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res;
        console.log(res);
        
      }
    )
  }


  articles= [
    {
      column: `Participer activement à une meilleure appropriation par le plus grand nombre des usages numériques, c’est l’objectif de notre activité « Inclusion numérique » au sein  de La Fabrique du Numérique Paloise.  
      `,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
    }
  ];

}
