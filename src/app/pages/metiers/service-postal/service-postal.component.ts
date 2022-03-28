import { Component, OnInit } from '@angular/core';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { FirebaseImagesService } from 'src/app/services/firebase-images.service';
import { PartenairesService } from 'src/app/services/partenaires.service';

@Component({
  selector: 'app-service-postal',
  templateUrl: './service-postal.component.html',
  styleUrls: ['./service-postal.component.css']
})
export class ServicePostalComponent implements OnInit {

  partenaires: IPartenaires[] = [];


  constructor(public firebaseServ: FirebaseImagesService, public partenaireServ: PartenairesService) { }

  ngOnInit(): void {
    this.firebaseServ.getServicePostal$();

    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res;
      }
    )
  }


  bgImg="/assets/img/service-postal.jpg"
  corner = "assets/corners/white_orange.png"
  title="Service Postal";
  accroche="STEP, votre opérateur postal de proximité ";
  text="Mine de rien, nous sommes le premier concurrent mais aussi le premier client de la Poste sur notre territoire !";



  articles = [
    {
      icon: '/assets/svg/blue_icons/folder_blue_icon.svg',
      titre: "Un Service Postal alternatif...",
     
      accroche:'...dédié aux professionnels',
      column: `Depuis 2011, nous détenons une licence d’opérateur postal privé délivrée par l’ARCEP afin d’offrir un Service Postal alternatif dédié aux professionnels faisant de nous le premier opérateur postal privé de proximité en Nouvelle Aquitaine.

Nous offrons à nos clients professionnels une gamme identique à celle du service postal national en évitant de s’équiper de machines à affranchir notamment et en offrant un véritable gain de temps.
      
Nous distribuons du courrier simple, proposons notre service de courrier recommandé : contre signature et avec accusé de réception, récupérons le courrier en centre de tri et le remettons à heures fixes, effectuons une collecte postale à heures fixes et réalisons l’affranchissement pour le compte de tiers. 

Soit une gamme de prestations identiques à celles du service postal historique avec un engagement fort de qualité et de suivi, et des prix plus compétitifs. 
      `,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
    },
   
  ];

}
