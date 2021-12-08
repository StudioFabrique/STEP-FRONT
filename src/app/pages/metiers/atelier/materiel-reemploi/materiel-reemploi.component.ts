import { Component, OnInit } from '@angular/core';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';
import { ThumbscarouselService } from 'src/app/services/thumbscarousel.service';

@Component({
  selector: 'app-materiel-reemploi',
  templateUrl: './materiel-reemploi.component.html',
  styleUrls: ['./materiel-reemploi.component.css']
})
export class MaterielReemploiComponent implements OnInit {

  constructor(public metierDetailsHeadersServ:MetiersDetailsHeadersService, public thumbsServ: ThumbscarouselService) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getMateriels();
    this.thumbsServ.getImgThumbsRecondition();
  }




  articles= [
    {
      column: `Évoluant dans l’univers informatique, c’est tout naturellement que nous avons pris le problème à bras le corps. Nous avons créé un atelier de reconditionnement pour redonner un second souffle aux matériels des entreprises et des particuliers qui ne servent plus. Nettoyés, reconditionnés, ils sont remis sur le marché ou distribués auprès de centres sociaux ou d’association.`,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
    }
  ];


}
