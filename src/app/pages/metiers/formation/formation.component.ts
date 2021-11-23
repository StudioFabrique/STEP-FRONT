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


  title = '';
  titleBold = "Formations";
  text = "La formation contre la fracture numérique";



  articles = [
    {
      icon: '/assets/svg/stack.svg',
      titre: 'Formations ',
      accroche:
        'Une formation au numérique pour tous',
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
//     {
//       icon: '/assets/svg/stack.svg',
//       titre: 'Des formations diplômantes au numérique ',
//       accroche:'La Fabrique du Numérique Paloise : formation et inclusion numérique',
//       column: `Initié en 2017, le Centre de Formation de STEP est original à plus d’un titre. En partenariat avec l’école privée SIMPLON et baptisé « Fabrique du Numérique Paloise », il fait cohabiter des personnes en insertion, des apprenants en formation continue ou en alternance. 
//       Estampillé CFA en 2021, il a pour ambition d’amener de la diversité dans les métiers du numérique (femmes, seniors, personnes issues des quartiers prioritaires, ruraux, réfugiés, personnes handicapées).
     
      
//       `,
      
//       image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
//       text: ` Il propose différents parcours de formation du bac au bac +3/4, ainsi que des dispositifs d’inclusion numérique qui s’appuient sur des pédagogies actives (école Simplon).
//       Avec la Fabrique du Numérique, nous souhaitons accompagner
//       la transformation  et la formation digitale des entreprises du territoire, donner aux apprenants et notamment ceux issus de la diversité, l’opportunité d’inscrire durablement leur projet professionnel dans des métiers en demande, participer à l’effort d’un accès plein et entier à sa citoyenneté par la maîtrise de l’environnement numérique.
      
      
//       Ce pôle d’activité emploie 15 personnes à temps complet

// Les parcours certifiants longs de l’école :
// - Développeur web, accessible sans prérequis, Bac+2
// en formation continue (l’enseignement est gratuit et co-financé par le Fonds Social Européen, la région Nouvelle-Aquitaine et la SHEM (filiale d’ENGIE).
// - Licence en alternance sur 18 mois, spécialisation technique (Cloud, IA), 
// - Technicien système et réseau en alternance.
// - Technicien supérieur système et réseau, Bac +2 en alternance.

// EN SAVOIR PLUS : RENVOI VERS LE SITE DE LA FABRIQUE : https://www.fabriquenumerique.fr/

// `,
//     },

  ]

}
