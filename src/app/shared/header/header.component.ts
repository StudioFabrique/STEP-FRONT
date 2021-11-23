import { Component, Input, OnInit } from '@angular/core';



export interface HeaderList {
  item: string,
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  headerItems1: HeaderList[] = [
    {"item": "Flux documentaire"},
    {"item": "Studio de développement"},
    {"item": "L'atelier numérique"}
  ]

  headerItems2: HeaderList[] = [
    {"item": "Livraison urbaine"},
    {"item": "Conciergerie d’entreprise"},
    {"item": "Formations"}
  ]

  ngOnInit(): void {
  }



 
  metiers = [
    { title: 'Flux Documentaire' },
    { title: 'Studio de Développement' },
    { title: "L'atelier Numérique" },
    { title: 'Livraison Urbaine' },
    { title: 'Service Postal' },
    { title: "Conciergerie d'Entreprise" },
    { title: 'Formations' },

  ];

  swipperConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 100,
    draggable: true,
    autoplaySpeed: 1000,
    initialSlide: 0,
    autoplay: false,
    arrows: false,
    mobileFirst: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: this.metiers.length,
          draggable: true,
          infinite: false,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: true,
          adaptiveHeight: true
        }
      }
    ]
  }


  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

}
