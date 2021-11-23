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

}
