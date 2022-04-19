import { Component, OnInit } from '@angular/core';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { IprestationsCarousel } from 'src/app/interfaces/iprestations-carousel';
import { PartenairesService } from 'src/app/services/partenaires.service';
import { PrestationsCarouselService } from 'src/app/services/prestations-carousel.service';

@Component({
  selector: 'app-flux-doc',
  templateUrl: './flux-doc.component.html',
  styleUrls: ['./flux-doc.component.css'],
})
export class FluxDocComponent implements OnInit {

  slides: IprestationsCarousel[] = [];
  partenaires: IPartenaires[] = []


  constructor(public prestationServ: PrestationsCarouselService, public partenaireServ: PartenairesService) { }

  ngOnInit(): void {
    this.prestationServ.getPrestations();
     this.partenaireServ.getPartenaires$()
  }

  // -- app-component-items-header --
  bgImg = '/assets/img/component-items-header/flux-doc/flux-doc_header.jpg';
  title = 'Flux documentaires';
  accroche = 'Une ingénierie dédiée à chaque projet de numérisation ';
  text =
    'La numérisation vous permet de réduire vos charges d’exploitation et de vous concentrer sur votre coeur de métier.';
  corner = 'assets/corners/white_orange.png';

  // CONTENT

  article_1 = [
   
    {
      icon: 'assets/svg/blue_icons/stack_blue_icon.svg',
      titre: 'Structuration de tout type documents',
      accroche:
        'La numérisation, notre cœur de métier pour réduire vos charges d’exploitation !',
      column: `La numérisation est notre activité phare
      avec un plateau de 600m2 pour l’accueillir. De l’audit des flux documentaires à la gestion complète de  processus d’affaires, nous traitons, la numérisation hauts volumes et la structuration de tout type documents (courriers entrants, dossiers techniques et administratifs A4/A3, hors formats, livres anciens, haute définition, sans contact, photographies, microfilms…) : tout est possible ! `,
      image: '/assets/img/flux-doc/flux_doc_body_1.png',
    }
  ];

  article_2 = [
    {
      icon: 'assets/svg/blue_icons/settings_blue_icon.svg',
      titre: 'Une ingénierie dédiée à chaque projet ',
      accroche: 'STEP expert de la capture d’image et de la numérisation ',
      column: `Pour faciliter le montage de vos projets de numérisation, nous proposons  une offre innovante et intégrée, facilement opérable, à faible impact financier, depuis la prise en charge de vos documents, jusqu'à leur mise à disposition sur une plateforme WEB de gestion de documents, avec une garantie possible « 0 défaut ».

Simple mais efficace dans son concept, Numéo est une offre « tout en un ». Adaptée à vos contraintes, Numéo vous apporte immédiatement de la réactivité, du confort et de la souplesse en proposant une meilleure productivité des processus métiers, une plus grande sécurité dans la gestion de l'information et de vos flux documentaires, ainsi qu’une valorisation des actifs immatériels.`,
      image: '/assets/img/flux-doc/flux_doc_body_2.png',
    },
  ]
  article_3 = [{
    
    icon: 'assets/svg/blue_icons/folder_blue_icon.svg',
      titre: 'Des prestations adaptées à vos projets !',
      accroche:
        'NUMEO, une offre intégrée de numérisation standard',
      column: `
      Expert de la capture d’image sur des supports très variés (dossiers de gestion ou techniques, microformes, plans & cartes, documents patrimoniaux…), STEP a développé également une forte expertise dans la gestion de projets
      et le traitement de données de flux documentaires.

       Nous adoptons nos work flow de production, développés en interne, à chaque type de production, aussi bien sur des projets à plusieurs millions de vues que pour quelques milliers, afin d’assurer une traçabilité totale des flux et de s’assurer de métriques performantes en termes de qualité.
      `,
      image: '/assets/img/flux-doc/flux_doc_body_3.png',
     
    
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
    
  ];
}
