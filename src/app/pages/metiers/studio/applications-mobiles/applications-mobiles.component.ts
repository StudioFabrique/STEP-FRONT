import { Component, OnInit } from '@angular/core';
import { IMetierDetailsHeaders } from 'src/app/interfaces/imetier-details-headers';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';
import { ThumbscarouselService } from 'src/app/services/thumbscarousel.service';

@Component({
  selector: 'app-applications-mobiles',
  templateUrl: './applications-mobiles.component.html',
  styleUrls: ['./applications-mobiles.component.css']
})
export class ApplicationsMobilesComponent implements OnInit {

  formations: IMetierDetailsHeaders[] = [];

  constructor(public metierDetailsHeadersServ:MetiersDetailsHeadersService, public thumbsServ: ThumbscarouselService) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getApplicationsMobiles();
    this.thumbsServ.getImgThumbsAppMobiles();
  }




  articles= [
   
    {
     
      column: `Toutes vos applications ne pourront être développées par nos soins. Nous sommes concentrés sur des solutions qui permettent une diffusion large sur les stores de Androïd et Apple au meilleur coût.

      Elles seront facilement adaptables pour le développement d'une application Web (SaaS), pour rentabiliser au maximum vos investissements et les temps de conception. 
      Sollicitez-nous pour tester vos besoins et tester votre marché. Nos choix permettent des prototypages rapides et rentables y compris sur les mobiles. 
      
      
      `,
      image: '',
    }
  ];

}
