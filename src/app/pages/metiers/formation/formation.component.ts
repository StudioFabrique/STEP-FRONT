import { Component, OnInit } from '@angular/core';
import { IprestationsCarousel } from 'src/app/interfaces/iprestations-carousel';
import { PrestationsCarouselService } from 'src/app/services/prestations-carousel.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  slides: IprestationsCarousel[] = []

  constructor(public prestationServ: PrestationsCarouselService) {}

  ngOnInit(): void {
    this.prestationServ.getPrestationsFormations();     
  }

  corner="assets/corners/orange_white.png";
  bgImg="assets/img/flux_doc.jpg";
  title = "Formations";
  accroche = "La formation contre la fracture numérique";
  text = "Depuis 2017, nous proposons des formations courtes ou longues pour acquérir ou bien développer ses compétences";



  articles = [
    {
      icon: '/assets/svg/stack.svg',
      titre: 'Une formation au numérique pour tous',
      accroche:'Le pari de la reconversion et de la diversité',
      column: `En tant qu’entreprise responsable et engagée, nous sommes sensibles aux tendances de fond qui traversent la société, et même en alerte. Adapter nos missions et nos supports d’inclusion à ces grandes lignes qui bougent sans cesse, c’est notre credo. 

      Depuis 2017, nous avons ainsi élargi notre mission d’insertion en misant sur la formation pour donner à chacun, qu’importe son parcours, son expérience, ou sa formation d’origine, l’opportunité de pouvoir se former dans le secteur incontournable du numérique et avons créé un centre de formation baptisé « La Fabrique du Numérique Paloise ». Y cohabitent en bonne intelligence des personnes en insertion, des alternants et des apprenants. De cette manière, notre école contribue à la réduction de la fracture numérique en Nouvelle Aquitaine. `,

      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
      text: `Labellisé CFA en 2021 et « Grande École du Numérique », la Fabrique du Numérique Paloise s’appuie sur les pédagogies d’enseignement innovantes de l’école Simplon sur la Technopole Hélioparc de Pau.

      L’école met en avant des méthodes de pédagogie active et propose :
      - Des parcours certifiants longs
      - Des formations courtes, et des formations digitales
      - et des actions d’inclusion numérique 
      `,

    },
  ]

}
