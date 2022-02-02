import { Component, OnInit } from '@angular/core';
import { IImages } from 'src/app/interfaces/iimages';
import { IMetierDetailsHeaders } from 'src/app/interfaces/imetier-details-headers';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { FirebaseImagesService } from 'src/app/services/firebase-images.service';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';
import { PartenairesService } from 'src/app/services/partenaires.service';


@Component({
  selector: 'app-editique',
  templateUrl: './editique.component.html',
  styleUrls: ['./editique.component.css']
})
export class EditiqueComponent implements OnInit {

  partenaires: IPartenaires[] = []
  images: IImages[] = [];

  constructor(
    public metierDetailsHeadersServ:MetiersDetailsHeadersService,
    public partenaireServ: PartenairesService,
    public firebaseServ: FirebaseImagesService
    ) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getEditique();
   
    this.firebaseServ.getEditiqueIMG$();
    
    this.partenaireServ.getPartenaires$();
  }


  articles= [
   
    {
     
      column: `L’Editique recouvre la récupération de vos flux de courriers électroniques via des plateformes d’échange de données sécurisés, les impressions, les poses de data matrix (codes-barres), la mise sous plis de vos documents (factures, bulletins de salaires, courriers commerciaux...) comme, l’affranchissement et la remise en poste de vos courriers.

      Nous proposons ainsi des solutions back office pour des opérations commerciales d’opérateurs. Nous traitons également le flux de factures de clients industriels ou l’édition de  bulletins de salaire...
      
      `
    }
  ];
}
