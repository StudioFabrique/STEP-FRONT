import { Component, OnInit } from '@angular/core';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { IprestationsCarousel } from 'src/app/interfaces/iprestations-carousel';
import { PartenairesService } from 'src/app/services/partenaires.service';
import { PrestationsCarouselService } from 'src/app/services/prestations-carousel.service';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {

  partenaires: IPartenaires[] = [];

  slides: IprestationsCarousel[] = []

  constructor(public prestationServ: PrestationsCarouselService, public partenaireServ: PartenairesService) {}

  ngOnInit(): void {
    this.prestationServ.getPrestationsStudio();    
    this.partenaireServ.getPartenaires$();
  }

  
  bgImg="/assets/img/component-items-header/studio/studio.jpg";
  corner="assets/corners/orange_white.png";
  title = 'Studio de Développement';
  accroche = "Des développeurs à votre écoute !";
  text = "Un studio de développement responsable pour vous accompagner dans tous vos projets de développement web et mobile";


  articles = [
    {
      icon: 'assets/svg/blue_icons/computer_blue_icon.svg',
      titre: 'Studio lancé en 2020',
      accroche:'Des technologies pour réduire votre empreinte écologique',
      column: `Lancé en 2020, le Studio de Développement vous assiste dans la mise en place et le développement d’outils, d’applications numériques et de prestations de développement web, en tenant compte des impératifs de développement durable en mettant au service de votre entreprise son ingénierie (informatique, logicielle...).

      Ainsi, le Studio développe des outils qui tiennent compte des nouveaux usages informatiques tout en intégrant la nécessité de réduire l’impact écologique du flux numérique. 
      A titre d’exemple, un des projets phares est la création d’un outil logiciel de création de site web 40% plus
      économe en ressources que le traditionnel WordPress.`,

      image: '/assets/img/component-items-header/studio/app-dev-2.jpg',
      text: '',

    },



    {
      icon: 'assets/svg/blue_icons/settings_3_blue_icon.svg',
      titre: 'Vos sites sur mesure ',
      accroche:'Réalisations basée sur une conception agile',
      column: `La réalisation de sites internet est notre point fort, basée sur une conception agile. Nous travaillons avec vous de l'étude du positionnement et l’élaboration de votre cahier des charges à la conception et au développement de votre site web en passant par la création de maquettes et la production ou scénarisation de vos contenus si nécessaire. 
      Nous vous accompagnons dans toutes les étapes de votre projet.
      
 Nous développons également des applications mobiles et web. N’hésitez pas à nous contacter pour nous exposer vos besoins.
      `,
      
      image: '/assets/img/component-items-header/studio/app-dev.jpg',
      text: '',
    },
  ]

}
