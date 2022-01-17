import { Component, OnInit } from '@angular/core';
import { IMetierDetailsHeaders } from 'src/app/interfaces/imetier-details-headers';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { FirebaseImagesService } from 'src/app/services/firebase-images.service';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';
import { PartenairesService } from 'src/app/services/partenaires.service';


@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.css']
})
export class AssistanceComponent implements OnInit {

  partenaires: IPartenaires[] = []

  constructor(public metierDetailsHeadersServ:MetiersDetailsHeadersService,   public firebaseServ: FirebaseImagesService,
    public partenaireServ: PartenairesService) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getAssistance();
    this.firebaseServ.getAtelierAssistanceIMG$();

    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res;
        console.log(res);
        
      }
    )

  }




  articles= [
    {
      column: `C’est une équipe de jeunes, dévoués, passionnés par leur métier, alternants en formation Technicien d'Assistance en Informatique à la Fabrique du Numérique que nous portons, ils sont à la fois à votre service et au leur. Chaque action d'assistance,  de reconditionnement ou de maintenance  leur permet d'améliorer leurs compétences tout en rendant des services à la communauté.`,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
    }
  ];
}
