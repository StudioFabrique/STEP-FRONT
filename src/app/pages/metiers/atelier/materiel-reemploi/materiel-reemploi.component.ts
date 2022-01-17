import { Component, OnInit } from '@angular/core';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { FirebaseImagesService } from 'src/app/services/firebase-images.service';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';
import { PartenairesService } from 'src/app/services/partenaires.service';


@Component({
  selector: 'app-materiel-reemploi',
  templateUrl: './materiel-reemploi.component.html',
  styleUrls: ['./materiel-reemploi.component.css']
})
export class MaterielReemploiComponent implements OnInit {

  partenaires: IPartenaires[] = [];


  constructor(
    public metierDetailsHeadersServ:MetiersDetailsHeadersService, 
    public firebaseServ: FirebaseImagesService,
    public partenaireServ: PartenairesService) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getMateriels();
    this.firebaseServ.getAtelierMaterielIMG$();

    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res;
        console.log(res);
        
      }
    )
  }




  articles= [
    {
      column: `Évoluant dans l’univers informatique, c’est tout naturellement que nous avons pris le problème à bras le corps. Nous avons créé un atelier de reconditionnement pour redonner un second souffle aux matériels des entreprises et des particuliers qui ne servent plus. Nettoyés, reconditionnés, ils sont remis sur le marché ou distribués auprès de centres sociaux ou d’association.`,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
    }
  ];


}
