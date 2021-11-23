import { Component, OnInit } from '@angular/core';
import { IMetierDetailsHeaders } from 'src/app/interfaces/imetier-details-headers';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';

@Component({
  selector: 'app-numerisation',
  templateUrl: './numerisation.component.html',
  styleUrls: ['./numerisation.component.css']
})
export class NumerisationComponent implements OnInit {


  constructor(public metierDetailsHeadersServ:MetiersDetailsHeadersService) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getNumerisation();
  }

}
