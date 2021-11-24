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

  }

