import { Component, Input, OnInit } from '@angular/core';

export interface HeaderList {
  item: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  headerItems1: HeaderList[] = [
    { item: 'Flux documentaire' },
    { item: 'Studio de développement' },
    { item: "L'atelier numérique" },
  ];

  headerItems2: HeaderList[] = [
    { item: 'Livraison urbaine' },
    { item: 'Conciergerie d’entreprise' },
    { item: 'Formations' },
  ];

  ngOnInit(): void {}

  metiers = [
    { title: 'Flux Documentaires', link: '/metiers/flux-documentaire' },
    { title: 'Studio de Développement', link: '/metiers/studio' },
    { title: 'Atelier Numérique', link: '/metiers/atelier-numerique' },
    { title: 'Livraison Urbaine', link: '/metiers/livraison' },
    { title: 'Service Postal', link: '/metiers/service-postal' },
    { title: 'Conciergerie', link: '/metiers/conciergerie' },
    { title: 'Formations', link: '/metiers/formations' },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: false,
    fade: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 2000,
          autoplaySpeed: 2000,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 2000,
          autoplaySpeed: 2000,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 2000,
          autoplaySpeed: 2000,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 325,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 2000,
          autoplaySpeed: 2000,
          autoplay: true,
          infinite: true,
        },
      },
    ],
  };

  slickInit(e: any) {}

  breakpoint(e: any) {}

  afterChange(e: any) {}

  beforeChange(e: any) {}
}
