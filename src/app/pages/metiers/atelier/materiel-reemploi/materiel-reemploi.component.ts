import { Component, OnInit } from '@angular/core';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';

@Component({
  selector: 'app-materiel-reemploi',
  templateUrl: './materiel-reemploi.component.html',
  styleUrls: ['./materiel-reemploi.component.css']
})
export class MaterielReemploiComponent implements OnInit {

  constructor(public metierDetailsHeadersServ:MetiersDetailsHeadersService) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getMateriels();
  }



}
