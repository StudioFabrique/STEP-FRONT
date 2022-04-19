import { Component, OnInit} from '@angular/core';
import { IClients, IPartenaires } from 'src/app/interfaces/ipartenaires';
import { ISliderAccueil } from 'src/app/interfaces/islider-accueil';
import { PartenairesService } from 'src/app/services/partenaires.service';
import { SliderAccueilService } from 'src/app/services/slider-accueil.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {

  partenaires: IPartenaires[] = [];
  clients: IClients[] = [];
  slides: ISliderAccueil[] = [];

  constructor(public partenaireServ: PartenairesService, public clientServ: PartenairesService,
    public slideAccueilServ: SliderAccueilService) { }

  ngOnInit(): void {
    // this.partenaireServ.getPartenaires();
    this.clientServ.getClients$().subscribe(
      res => {
        this.clients = res;
      }
    );

    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res;        
      }
    )

    this.slideAccueilServ.getSliderAccueil$().subscribe(res => {
      this.slides = res;      
    })
  }


  
}


