import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IliensFooter, IliensMetiers, IliensMissions } from 'src/app/interfaces/iliens-footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}


  currentYear: number = new Date().getFullYear();

  ngOnInit(): void {

  }

  panelOpenState = false;

  copyright = `Copyright © STEP 2001 - ${this.currentYear}`;

  twitter = 'https://twitter.com';
  linkedin = 'https://fr.linkedin.com/company/step-sa';
  instagram = 'https://instagram.com';
  facebook = 'https://facebook.com';

  liens: IliensFooter[] = [


    {
      title:"Mentions Légales",
      link: "/mentions-legales"
    },

    {
      title:"Eco Conception",
      link: "/eco-conception"
    },
    {
      title:"Contactez-nous",
      link: "/contact"
    },

  ];

  liensMissions: IliensMissions[] = [

    {
      title:"Nos Valeurs",
      link: "/missions/valeurs"
    },

    {
      title:"Gouvernance",
      link: "/missions/gouvernance"
    },

    {
      title:"Partenaires",
      link: "/missions/partenaires"
    },
   
  ];

  liensMetiers: IliensMetiers[] = [
      {
        title:"Flux Documentaires",
        link: "/metiers/flux-documentaires"
      },
      {
        title:"Studio de Dévelopement",
        link: "/metiers/studio"
      },
     
      {
        title:"Atelier Numérique",
        link: "/metiers/atelier-numerique"
      },
     
      {
        title:"Livraison Urbaine",
        link: "/metiers/livraison"
      },
     
      {
        title:"Service Postal",
        link: "/metiers/service-postal"
      },
     
      {
        title:"Conciergerie d'Entreprise",
        link: "/metiers/conciergerie"
      },  
      {
        title:"Formations",
        link: "/metiers/formations"
      },     
  ];
}
