import { Component, OnInit } from '@angular/core';
import { IClients, IPartenaires } from 'src/app/interfaces/ipartenaires';
import { PartenairesService } from 'src/app/services/partenaires.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  partenaires: IPartenaires[] = []
  clients: IClients[] = []

  constructor(public partenaireServ: PartenairesService, public clientServ: PartenairesService) { }

  ngOnInit(): void {
    // this.partenaireServ.getPartenaires();
    this.clientServ.getClients$().subscribe(
      res => {
        this.clients = res;
        console.log(res);
        
      }
    );

    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res;
        console.log(res);
        
      }
    )
  }

  
}


