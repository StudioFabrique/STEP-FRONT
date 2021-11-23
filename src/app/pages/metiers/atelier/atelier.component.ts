import { Component, OnInit } from '@angular/core';
import { IprestationsCarousel } from 'src/app/interfaces/iprestations-carousel';
import { PrestationsCarouselService } from 'src/app/services/prestations-carousel.service';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.component.html',
  styleUrls: ['./atelier.component.css']
})
export class AtelierComponent implements OnInit {

  slides: IprestationsCarousel[] = []

  constructor(public prestationServ: PrestationsCarouselService) { }

  ngOnInit(): void {
    this.prestationServ.getPrestationsAtelier()
  }


  bgImg="assets/img/office.jpg"
  corner = "assets/corners/white_orange.png"
  title="L'Atelier Numérique";
  titleBold="Un atelier pour lutter contre la fracture numérique !";
  text="";



  articles = [
    {
      icon: '/assets/svg/stack.svg',
      titre: "Atelier Numérique",
     
      accroche:' ',
      column: `Conscients des impacts environnementaux du numérique et du renouvellement accéléré des matériels informatiques, nous avons créé l’Atelier numérique qui propose des solutions de bon sens pour lutter contre la fracture numérique. Soit des prestations de maintenance et d’assistance informatique, mais également le reconditionnement et le recyclage de matériels informatiques offerts par des entreprises partenaires. 

     
      `,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
      text: `
      //Blockquote a ajouter
      Conscients des impacts environnementaux du numérique et du renouvellement accéléré des matériels informatiques, nous avons créé l’Atelier numérique qui propose des solutions de bon sens pour lutter contre la fracture numérique. Soit des prestations de maintenance et d’assistance informatique, mais également le reconditionnement et le recyclage de matériels informatiques offerts par des entreprises partenaires. 
      Gérald Abbadie, responsable pôle formation & responsable technique Studio de Développement et Atelier Numérique
      `,
    },
   
  ];

}
