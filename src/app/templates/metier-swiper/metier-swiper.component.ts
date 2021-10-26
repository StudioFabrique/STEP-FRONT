import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metier-swiper',
  templateUrl: './metier-swiper.component.html',
  styleUrls: ['./metier-swiper.component.css'],
})
export class MetierSwiperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  metiers = [
    { title: 'Flux Documentaire' },
    { title: 'Studio de Développement' },
    { title: "L'atelier Numérique" },
    { title: 'Livraison Urbaine' },
    { title: 'Service Postal' },
    { title: "Conciergerie d'Entreprise" },
    { title: 'Formations de Numérique' },
  ];

  swipperConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
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
