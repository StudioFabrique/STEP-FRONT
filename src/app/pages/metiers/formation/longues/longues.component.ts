import { Component, OnInit } from '@angular/core';
import { IMetierDetailsHeaders } from 'src/app/interfaces/imetier-details-headers';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';
import { PartenairesService } from 'src/app/services/partenaires.service';
import { ThumbscarouselService } from 'src/app/services/thumbscarousel.service';

@Component({
  selector: 'app-longues',
  templateUrl: './longues.component.html',
  styleUrls: ['./longues.component.css']
})
export class LonguesComponent implements OnInit {

  partenaires: IPartenaires[] = [];


  constructor(public metierDetailsHeadersServ:MetiersDetailsHeadersService, public thumbsServ: ThumbscarouselService,
    public partenaireServ: PartenairesService) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getFormationsLongues();
    this.thumbsServ.getImgThumbsFormationsLongues();


    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res;
        console.log(res);
        
      }
    )
  }





  articles= [
    {
      column: `Initié en 2017, le Centre de Formation de STEP est original à plus d’un titre. En partenariat avec l’école privée SIMPLON et baptisé « Fabrique du Numérique Paloise », il fait cohabiter des personnes en insertion, des apprenants en formation continue ou en alternance. 

Estampillé CFA en 2021, il a pour ambition d’amener de la diversité dans les métiers du numérique (femmes, seniors, personnes issues des quartiers prioritaires, ruraux, réfugiés, personnes handicapées).
Il propose différents parcours de formation du bac au bac +3/4, ainsi que des dispositifs d’inclusion numérique qui s’appuient sur des pédagogies actives (école Simplon).
      `,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
    }
  ];
}
