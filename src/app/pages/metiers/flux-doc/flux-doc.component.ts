import { Component, OnInit } from '@angular/core';
import { IprestationsCarousel } from 'src/app/interfaces/iprestations-carousel';
import { PrestationsCarouselService } from 'src/app/services/prestations-carousel.service';

@Component({
  selector: 'app-flux-doc',
  templateUrl: './flux-doc.component.html',
  styleUrls: ['./flux-doc.component.css'],
})
export class FluxDocComponent implements OnInit {
  slides: IprestationsCarousel[] = [];

  constructor(public prestationServ: PrestationsCarouselService) { }

  ngOnInit(): void {
    this.prestationServ.getPrestations();
  }

  // -- app-component-items-header --
  bgImg = 'assets/img/office.jpg';
  title = 'Flux Documentaires';
  accroche = 'Une ingénierie dédiée à chaque projet de numérisation ';
  text =
    'La numérisation vous permet de réduire vos charges d’exploitation et de vous concentrer sur vos coeurs de métier.';
  corner = 'assets/corners/white_orange.png';

  // CONTENT

  article_1 = [
   
    {
      icon: '/assets/svg/stack.svg',
      titre: 'structuration de tout type documents',
      accroche:
        'La numérisation, notre cœur de métier pour réduire vos charges d’exploitation !',
      column: `La numérisation est notre activité phare
      avec un plateau de 600m2 pour l’accueillir. De l’audit des flux documentaires à la gestion complète de  processus d’affaires, nous traitons, la numérisation hauts volumes et la structuration de tout type documents (courriers entrants, dossiers techniques et administratifs A4/A3, hors formats, livres anciens, haute définition, sans contact, photographies, microfilms…) : tout est possible ! `,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
    }
  ];

  article_2 = [
    {
      icon: '/assets/svg/stack.svg',
      titre: 'Une ingénierie dédiée à chaque projet ',
      accroche: 'STEP expert de la capture d’image et de la numérisation ',
      column: `Pour faciliter le montage de vos projets de numérisation, nous proposons  une offre innovante et intégrée, facilement opérable, à faible impact financier, depuis la prise en charge de vos documents, jusqu'à leur mise à disposition sur une plateforme WEB de gestion de documents, avec une garantie possible « 0 défaut ».

Simple mais efficace dans son concept, Numéo est une offre « tout en un ». Adaptée à vos contraintes, Numéo vous apporte immédiatement de la réactivité, du confort et de la souplesse en proposant une meilleure productivité des processus métiers, une plus grande sécurité dans la gestion de l'information et de vos flux documentaires, ainsi qu’une valorisation des actifs immatériels.`,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
    },
  ]
  article_3 = [{
    
      icon: '/assets/svg/stack.svg',
      titre: 'Des prestations adaptées à vos projets !',
      accroche:
        'NUMEO, une offre intégrée de numérisation standard',
      column: `
      Pour faciliter le montage de vos projets de numérisation, nous proposons  une offre innovante et intégrée, facilement opérable, à faible impact financier, depuis la prise en charge de vos documents, jusqu'à leur mise à disposition sur une plateforme WEB de gestion de documents, avec une garantie possible « 0 défaut ».
      Simple mais efficace dans son concept, Numéo est une offre « tout en un ».
      Adaptée à vos contraintes, Numéo vous apporte immédiatement de la réactivité, du confort et de la souplesse en proposant une meilleure productivité des processus métiers, une plus grande sécurité dans la gestion de l'information et de vos flux documentaires, ainsi qu’une valorisation des actifs mmatériels.
      `,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
     
    
  }]
  soustitres = [
    {
      soustitre: 'Expresso Cloud pour gérer votre correspondance numérique',
      text: ` Notre partenaire/filiale DIS installée à Bidart a développé Expresso Cloud, un produit de Gestion Électronique des Correspondances, distribué notamment auprès de collectivités. Grâce à celui-ci vous gérez, triez vos courriers, en contrôlez la diffusion, et y répondez en y associant la possibilité de viser et de signer électroniquement.`,
    },
    {
      soustitre: ` EOS, le connecteur magique !`,
      text: `Un connecteur vous offre la possibilité d’orienter vos flux d’impression vers nous.  
STEP Eos est notre solution d’impression de courriers déportée. Nous nous occupons directement de l’impression, de la mise sous pli, de l’affranchissement et jusqu’au  dépôt poste. De cette manière vous libérez votre organisation et vous réalisez des économies sur vos consommables, tout en accédant à des tarifs d’affranchissement avantageux.
Notre solution Eos s’adapte à vos différents services : administratif et financier, achats, ressources humaines, commercial…
      `,
    },
    {
      soustitre: `STEP Eos, le suivi de vos expéditions`,
      text: `STEP Eos offre le suivi de vos expéditions par service, par délai et par période au travers d’indicateurs préétablis.`,
    },
    {
      soustitre: `Tarifs : nous consulter`,
      text: '',
    },
  ];
}
