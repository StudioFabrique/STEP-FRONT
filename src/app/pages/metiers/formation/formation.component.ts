import { Component, OnInit } from '@angular/core';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { IprestationsCarousel } from 'src/app/interfaces/iprestations-carousel';
import { PartenairesService } from 'src/app/services/partenaires.service';
import { PrestationsCarouselService } from 'src/app/services/prestations-carousel.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  partenaires: IPartenaires[] = [];
  slides: IprestationsCarousel[] = []

  constructor(public prestationServ: PrestationsCarouselService,
    public partenaireServ: PartenairesService) {}

  ngOnInit(): void {
    this.prestationServ.getPrestationsFormations();     

    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res;
        console.log(res);
        
      }
    )
  }

  corner="assets/corners/orange_white.png";
  bgImg="/assets/img/component-items-header/formation/formations_header.jpg";
  title = "Formations";
  accroche = "La formation contre la fracture numérique";
  text = "Depuis 2017, nous proposons des formations courtes ou longues pour acquérir ou bien développer ses compétences";



  articles = [
    {
      icon: '/assets/svg/stack.svg',
      titre: 'Une formation au numérique pour tous',
      accroche:'Le pari de la reconversion et de la diversité',
      image: '/assets/img/qualiopi.png',
    },
  ]

}
