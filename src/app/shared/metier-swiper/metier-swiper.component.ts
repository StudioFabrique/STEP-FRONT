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
    { title: 'Flux documentaire' },
    { title: 'Studio de développement' },
    { title: "L'atelier numérique" },
    { title: 'Livraison urbaine' },
    { title: 'Service Postal' },
    { title: "Conciergerie d'entreprise" },
    { title: 'Formations' },
  ];

}
