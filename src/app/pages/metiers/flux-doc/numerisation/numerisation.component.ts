import { Component, OnInit } from '@angular/core';
import { IMetierDetailsHeaders } from 'src/app/interfaces/imetier-details-headers';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';
import { PartenairesService } from 'src/app/services/partenaires.service';
import { ThumbscarouselService } from 'src/app/services/thumbscarousel.service';

@Component({
  selector: 'app-numerisation',
  templateUrl: './numerisation.component.html',
  styleUrls: ['./numerisation.component.css']
})
export class NumerisationComponent implements OnInit {

  partenaires: IPartenaires[] = []

  constructor(
    public metierDetailsHeadersServ:MetiersDetailsHeadersService, 
    public thumbsServ: ThumbscarouselService,
    public partenaireServ: PartenairesService
    ) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getNumerisation();
    this.thumbsServ.getImgThumbsNumerisation();


    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res;
        console.log(res);
        
      }
    )
  }



  articles= [
   
    {
     
      column: `Nous proposons deux espaces et des matériels spécialisés dans le traitement et la numérisation très qualitative de vos documents patrimoniaux anciens (livres, registres...), documents hauts volumes, hors format, ou encore  micro formats (microfilms, microfiches), associés à des compétences reconnues dans le traitement de l'image.

      Nous garantissons ainsi un choix optimisé entre contraintes, coûts et résultats attendus, en privilégiant les formats universels pour prendre en compte l’évolutivité et l’interopérabilité, tout en optimisant les performances de votre organisation. 
      `,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
    }
  ];

}
