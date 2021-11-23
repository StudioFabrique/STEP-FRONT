import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-postal',
  templateUrl: './service-postal.component.html',
  styleUrls: ['./service-postal.component.css']
})
export class ServicePostalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  bgImg="assets/img/office.jpg"
  corner = "assets/corners/white_orange.png"
  title="STEP, premier concurrent mais aussi premier client de la Poste";
  titleBold="Votre opérateur postal de proximité !";
  text="";



  articles = [
    {
      icon: '/assets/svg/stack.svg',
      titre: "Livraison Urbaine",
     
      accroche:' ',
      column: `Depuis 2011, nous détenons une licence d’opérateur postal privé délivrée par l’ARCEP afin d’offrir un Service Postal alternatif dédié aux professionnels faisant de nous le premier opérateur postal privé de proximité en Nouvelle Aquitaine.
      Nous offrons à nos clients professionnels une gamme identique à celle du service postal national en évitant de s’équiper de machines à affranchir notamment et en offrant un véritable gain de temps.
      
      Nous distribuons du courrier simple, proposons notre service de courrier recommandé : contre signature et avec accusé de réception, récupérons le courrier en centre de tri et le remettons à heures fixes, effectuons une collecte postale à heures fixes et réalisons l’affranchissement pour le compte de tiers. 
      Soit une gamme de prestations identiques à celles du service postal historique avec un engagement fort de qualité et de suivi, et des prix plus compétitifs. 
      `,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
      text: `
Nos services et avantages:
  - Délai de distribution en J+1 garanti-Distribution sur présentation d'un justificatif d'identité.
  - Jusqu'à 55% d'économie sur l'envoi d'un recommandé.
  - Distribution de vos campagnes de communication.
  - Distribution de mailings adressés sur notre zone de distribution-Distribution toute boite de vos mailings non adressés-Distribution réalisée en J+4 ou J+7.
  - Avantages -De 5% à 42% d'économies réalisées sur votre budget postal.
  -Facturation mensuelle détaillée de votre consommation-Plus besoin d'affranchir et de peser votre courrier.


  Près de 100 000 courriers par an sont pris en charge par STEP depuis 2012 pour le compte d’une trentaine de clients. Parmi ceux-ci, on trouve la Caisse Primaire d’Assurance Maladie de Pau, Pau Béarn Habitat, le Greffe du Tribunal de Commerce, des notaires, lycées..., l’Elan Béarnais, Hélioparc, la Mairie de Pau… Des économies de 10 à 40 % réalisées selon les entreprises !


      `,
    },
   
  ];

}
