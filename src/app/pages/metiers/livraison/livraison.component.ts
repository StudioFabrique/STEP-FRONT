import { Component, OnInit } from '@angular/core';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { PartenairesService } from 'src/app/services/partenaires.service';
import { ThumbscarouselService } from 'src/app/services/thumbscarousel.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {

  partenaires: IPartenaires[] = [];


  constructor(public thumbsServ: ThumbscarouselService,  public partenaireServ: PartenairesService) { }

  ngOnInit(): void {
    this.thumbsServ.getImgThumbsLivraison();


    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res;
        console.log(res);
        
      }
    )
  }

  bgImg="assets/img/office.jpg"
  corner = "assets/corners/white_orange.png"
  title="Livraison urbaine";
  accroche="Des triporteurs pour vos colis citadins";
  text="Nous développons des livraisons en ville en pariant sur la mobilité douce pour réduire les impacts et nous adaptons au trafic";

  articles = [
    {
      icon: '/assets/svg/stack.svg',
      titre: "Acheminement en centre ville",
      accroche:'.... avec les Triporteurs Palois',
      column: `Circuler,  stationner et livrer en centre ville n’est pas toujours chose aisée. Notre département logistique, qui a vu le jour quelques semaines avant le premier confinement, achemine les marchandises de centre-ville sur le dernier kilomètre et réceptionne les colis (Chronopost, DB Schenker, Heppner…), le tout à vélo électrique cargo à assistance électrique grâce aux Triporteurs Palois. 
`,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
      text: `Nous évitons ainsi les encombrements provoqués par la livraison d’un gros véhicule en stationnement, et pouvons nous faufiler dans le trafic interurbain.
      Nous proposons également un service de livraison intra centre-ville entre commerçants ou commerçants/clients. Le recours à une mobilité douce permet de réduire les impacts tout en misant sur l’agilité et la proximité et une meilleure gestion des flux. 
      `,
    },
    {
      icon: '/assets/svg/stack.svg',
      titre: "Livraison dernier kilomètre (flux transporteur)",
      accroche:'Services aux transporteurs',
      column: ``,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
      text: `Nous distribuons vos colis et palettes en vélo cargo à assistance électronique. Nous acheminons ainsi sur le dernier kilomètres les palettes et colis de SCHENKER, BMV, HEPNER, CHRONOPOST…`,
    },
    {
      icon: '/assets/svg/stack.svg',
      titre: "Livraison de proximité ",
      accroche:'Services aux commerçants',
      column: ``,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
      text: `Nous préparons vos commandes et les expédions ou les livrons et assurons tant le stockage que la petite logistique urbaine. Nous réalisons ainsi la livraison pour le Drive fermier ou de fleurs pour le compte de nombreux fleuristes. Une nouvelle alternative pour des livraisons parfois faites par des taxis !`,
    },

    {
      icon: '/assets/svg/stack.svg',
      titre: "Collecte des biodéchets pour la restauration",
      accroche:'Service aux restaurateurs et services de restauration collective',
      column: ``,
      image: '',
      text: `Nous étudions le développement d’un service de collecte et de valorisation des biodéchets pour les cafetiers et restaurateurs palois, toujours avec les Triporteurs Palois. Un service qui pourrait également séduire les collectivités, les services de restauration collective.`,
    },
  ];
}
