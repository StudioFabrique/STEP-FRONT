import { Component, OnInit } from '@angular/core';
import { IMetierDetailsHeaders } from 'src/app/interfaces/imetier-details-headers';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { FirebaseImagesService } from 'src/app/services/firebase-images.service';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';
import { PartenairesService } from 'src/app/services/partenaires.service';
import { ThumbscarouselService } from 'src/app/services/thumbscarousel.service';

@Component({
  selector: 'app-traitement-donnees',
  templateUrl: './traitement-donnees.component.html',
  styleUrls: ['./traitement-donnees.component.css']
})
export class TraitementDonneesComponent implements OnInit {

  partenaires: IPartenaires[] = []




  constructor(
    public metierDetailsHeadersServ: MetiersDetailsHeadersService,
    public firebaseServ: FirebaseImagesService,
    public partenaireServ: PartenairesService
    ) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getTraitementDonnees();

    this.firebaseServ.getTraitementDonneesIMG$();

    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res;
        console.log(res);
        
      }
    )
  }




  articles= [
   
    {
     
      column: `Le traitement des données automatisées permet d’optimiser l’accès à vos flux numérisés. Il inclut la reconnaissance optique de caractères, la lecture et la reconnaissance automatique de documents, le vidéocodage sur de grandes quantités de données… Tout ce qui permet d’enrichir et d’exploiter au mieux vos fonds numérisés.
      
      `,
      image: '',
    }
  ];
}
