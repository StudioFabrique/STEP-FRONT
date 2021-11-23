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

  constructor(public prestationServ: PrestationsCarouselService) {}

  ngOnInit(): void {
    this.prestationServ.getPrestations();
    //  this.prestationServ.prestationsDetails;

    // this.prestationServ.getPrestations().subscribe((data:any) => {
    //   this.slides = data
    //   console.log("here is the data: " , this.slides);
    // })
  }

  // -- app-component-items-header --
  title = 'Flux Documentaires';
  titleBold = "Flux Documentaires";
  text = "La numérisation, notre cœur de métier pour réduire vos charges d’exploitation !";

  // -- app-prestations-carousel --
  // slides= [
  //   {
  //     listTitle: "Numérisation",
  //     img: '../../../assets/solutions/formations.jpg',
  //     title: 'Numérisation',
  //     text: 'Numérisation hauts volumes, patrimoniale, microformes, hors format, grand format et traitement de données. Editique, impression déportée de courriers de gestion',
  //   },
  //   {
  //     listTitle: 'Traitement de données',
  //     img: '../../../assets/solutions/formations.jpg',
  //     title: 'Traitement de données',
  //     text: 'Numérisation hauts volumes, patrimoniale, microformes, hors format, grand format et traitement de données. Editique, impression déportée de courriers de gestion',
  //   },
  //   {
  //     listTitle: 'Editique',
  //     img: '../../../assets/solutions/formations.jpg',
  //     title: 'Editique',
  //     text: 'Numérisation hauts volumes, patrimoniale, microformes, hors format, grand format et traitement de données. Editique, impression déportée de courriers de gestion',
  //   },
  // ];

  articles = [
    {
      icon: '/assets/svg/stack.svg',
      titre: 'Flux documentaires ',
      accroche:
        'La numérisation, notre cœur de métier pour réduire vos charges d’exploitation !',
      column: `La numérisation est notre activité phare
      avec un plateau de 600m2 pour l’accueillir. De l’audit des flux documentaires à la gestion complète de  processus d’affaires, nous traitons, la numérisation hauts volumes et la structuration de tout type documents (courriers entrants, dossiers techniques et administratifs A4/A3, hors formats, livres anciens, haute définition, sans contact, photographies, microfilms…) : tout est possible ! `,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
      text: `Nos services vous permettent de partager votre information avec souplesse, d’accéder en simultané à vos données numérisées, de maîtriser le flux de vos documents (papier ou électroniques), d’en avoir une traçabilité et d’en sécuriser les accès.

Cela vous permet d’améliorer votre productivité et de vous concentrer sur votre cœur de métier en capitalisant sur les actifs immatériels de votre structure. 

POINTS FORTS :
- Accès simultanés sécurisés à  l’information (en intranet ou extranet)
- Réduction importante des temps de recherche
- Sauvegarde de vos données essentielles en cas de sinistre par exemple, sans interruption de votre activité
- Préservation de la mémoire de votre entreprise

La numérisation de dossiers techniques pour TOTAL fait partie de nos activités récurrentes. Depuis 2001, nous accompagnons le groupe dans la numérisation et la structuration de données complexes et très hétérogènes, ce qui représente des volumes de plusieurs de milliers de documents.

De 2010 à 2013, nous avons également accompagné la Caisse des Dépôts et Consignations dans un projet industriel ambitieux :  la numérisation d’une grande partie de son fonds de dossiers de gestion, lui permettant d’anticiper les demandes de liquidation des dossiers retraite tout en optimisant ses espaces de stockage. Au total plus de sept millions d’images traitées !

Nous accompagnons depuis notre création des services d’archives de plusieurs départements pour la numérisation de leur fonds patrimoniaux tant sous la forme de registres reliés, de cartes ou de micro formes.

Avec des équipes présentes sur site et une organisation dédiée de plus de 25 personnes, nous avons pu faire la démonstration de notre capacité à accompagner de grands projets.

Le service Flux Documentaires de STEP, c’est 11 personnes : 6 opérateurs, 4 coordinateurs d’activités et 1 responsable de pôle à votre service.`,
    },

    {
      icon: '/assets/svg/stack.svg',
      titre: 'Une ingénierie dédiée',
      // titre: 'Une ingénierie dédiée à chaque projet de numérisation',
      accroche:
        'Un expert de la capture d’image sur des supports très variés à votre service',
      column: `Expert de la capture d’image sur des supports très variés (dossiers de gestion ou techniques, microformes, plans & cartes, documents patrimoniaux…), STEP a développé également une forte expertise dans la gestion de projets et le traitement de données de flux documentaires.
      Nous adoptons nos work flow de production, développés en interne, à chaque type de production, aussi bien sur des projets à plusieurs millions de vues que pour quelques milliers, afin d’assurer une traçabilité totale des flux et de s’assurer de métriques performantes en termes de qualité.`,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
      text: `
  
Les images et données produites sont restituées dans tous les formats possibles afin de pouvoir être directement intégrés dans les logiciels métiers ou systèmes d’information de nos clients. Les échanges de données sont réalisés via des échanges sécurisés (Ligne Sécurisée, protocole CFT, plateforme de transfert de données STEP cryptée…).
  
Nous sommes également en mesure de vous proposer des solutions de gestion, d’hébergement et d’accès sécurisés à vos données via des interfaces web robustes et adaptées à vos besoins.
  
Selon les projets, nous développons en interne des applications adaptées à nos opérations de numérisation, notamment pour traiter des documents aux formats variés nécessitant le recours à différentes machines pour les traiter et pouvoir réunir sur le même fichier numérique cette diversité de formats, tout en garantissant un véritable contrôle qualité permettant de vérifier qu’aucune donnée n’a été oubliée.
  
En misant sur la sauvegarde de vos données via nos services de numérisation, vous misez sur le long terme. Ainsi en cas de sinistre ou d’imprévu, vous préservez votre activité, vous contrôlez et limitez l’accès à vos données numériques et valorisez les actifs immatériels de votre entreprise, en en conservant la mémoire (plans, dossiers techniques, études, rapports… ).`,
    },
  ];
}
