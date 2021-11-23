import { Component, OnInit } from '@angular/core';
import { IprestationsCarousel } from 'src/app/interfaces/iprestations-carousel';
import { PrestationsCarouselService } from 'src/app/services/prestations-carousel.service';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {

  slides: IprestationsCarousel[] = []

  constructor(public prestationServ: PrestationsCarouselService) {}

  ngOnInit(): void {
    this.prestationServ.getPrestationsStudio();     
  }

  title = 'Des développeurs à votre écoute !';
  titleBold = "Le Studio";
  text = "Un studio de développement responsable pour vous accompagner dans tous vos projets de développement web et mobile ";



  articles = [
    {
      icon: '/assets/svg/stack.svg',
      titre: 'Studio de Développement ',
      accroche:
        'Lancé en 2020, le Studio de Développement vous assiste ',
      column: `Lancé en 2020, le Studio de Développement vous assiste dans la mise en place et le développement d’outils, d’applications numériques et de prestations de développement web, en tenant compte des impératifs de développement durable en mettant au service de votre entreprise son ingénierie (informatique, logicielle...).

      Ainsi, le Studio développe des outils qui tiennent compte des nouveaux usages informatiques tout en intégrant la nécessité de réduire l’impact écologique du flux numérique. 
      A titre d’exemple, un des projets phares est la création d’un outil logiciel de création de site web 40% plus
      économe en ressources que le traditionnel WordPress.`,

      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
      text: '',

    },
    {
      icon: '/assets/svg/stack.svg',
      titre: 'Vos sites sur mesure ',
      accroche:'',
      column: `La réalisation de sites internet est notre point fort, basée sur une conception agile. Nous travaillons avec vous de l'étude du positionnement et l’élaboration de votre cahier des charges à la conception et au développement de votre site web en passant par la création de maquettes et la production ou scénarisation de vos contenus si nécessaire. 
      Nous vous accompagnons dans toutes les étapes de votre projet.
      
      Nous développons également des applications mobiles et web. N’hésitez pas à nous contacter pour nous exposer vos besoins.
      `,
      
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
      text: '',
    },
  ]

}
