import { Component, OnInit } from '@angular/core';
import { IMetierDetailsHeaders } from 'src/app/interfaces/imetier-details-headers';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';

@Component({
  selector: 'app-traitement-donnees',
  templateUrl: './traitement-donnees.component.html',
  styleUrls: ['./traitement-donnees.component.css']
})
export class TraitementDonneesComponent implements OnInit {



  constructor(public metierDetailsHeadersServ:MetiersDetailsHeadersService) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getTraitementDonnees();
  }
}
