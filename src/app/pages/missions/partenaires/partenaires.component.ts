import { Component, OnInit } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IClients, IPartenaires, IReseaux } from 'src/app/interfaces/ipartenaires';
import { PartenairesService } from 'src/app/services/partenaires.service';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent implements OnInit {

  clients: IClients[] = [];
  partenaires: IPartenaires[] = [];
  reseaux: IReseaux[] = [];

  constructor(public clientServ: PartenairesService, public partenaireServ: PartenairesService, public reseauxServ: PartenairesService) { }

  ngOnInit(): void {
    this.clientServ.getClients$()
    .pipe(switchMap((clients) => combineLatest([of(clients), this.partenaireServ.getPartenaires$()])))
    .subscribe(
      ([clients, partenaires]) => {
        this.clients = clients;
        this.partenaires = partenaires;
       
        console.log(clients, partenaires);
      }
    );

    this.reseauxServ.getReseaux$().subscribe(
      res => {
        this.reseaux = res;
        console.log(res);
        
      }
    )
  }



  bgColor = "#00B0CC"
  bgImg="assets/img/office.jpg"
  corner = "assets/corners/blue_orange.png"
  title = "Ils nous font confiance..."
  accroche = "... et nous aussi !"
  text = "La confiance est essentielle pour mener à bien nos missions et répondre aux demandes les plus variées de nos clients. "



  intro_1  = {
    "p": `Parmi les clients de STEP, on trouve de nombreuses références de grands groupes, de collectivités locales et également de PME/PMI : `

  }

  intro_2  = {
    "p": `Pour mener à bien sa mission, STEP s’appuie sur un certain nombre de partenaires parmi lesquels : `
  }

  intro_3  = {
    "p": `... et c'est notre réseau:`
  }


}
