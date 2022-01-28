import { Component, OnInit } from '@angular/core';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { IprestationsCarousel } from 'src/app/interfaces/iprestations-carousel';
import { PartenairesService } from 'src/app/services/partenaires.service';
import { PrestationsCarouselService } from 'src/app/services/prestations-carousel.service';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.component.html',
  styleUrls: ['./atelier.component.css']
})
export class AtelierComponent implements OnInit {

  slides: IprestationsCarousel[] = [];
  partenaires: IPartenaires[] = []


  constructor(public prestationServ: PrestationsCarouselService, public partenaireServ: PartenairesService) { }

  ngOnInit(): void {
    this.prestationServ.getPrestationsAtelier();


    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res;
        console.log(res);
        
      }
    )
  }


  bgImg="/assets/img/component-items-header/atelier/atelier_header.jpg"
  corner = "assets/corners/white_orange.png"
  title="L' Atelier Numérique";
  accroche="Pour lutter contre la fracture numérique !";
  text="Des solutions de bon sens : reconditionnement, réemploi du matériel informatique, formations, maintenance, assistance et accompagnement";






  articles = [
    {
      icon: '/assets/svg/stack.svg',
      titre: "Maintenance et assistance informatique",
     
      accroche:'Accompagnement, conseils et dépannage',
      column: `Conscients des impacts environnementaux du numérique et du renouvellement accéléré des matériels informatiques, nous avons créé l’Atelier numérique qui propose des solutions de bon sens pour lutter contre la fracture numérique. Soit des prestations de maintenance et d’assistance informatique, mais également le reconditionnement et le recyclage de matériels informatiques offerts par des entreprises partenaires. 

     
      `,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
      text: '',
    },
   
  ];

}
