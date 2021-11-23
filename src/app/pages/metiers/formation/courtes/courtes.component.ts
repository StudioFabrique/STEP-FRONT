import { Component, OnInit } from '@angular/core';
import { IMetierDetailsHeaders } from 'src/app/interfaces/imetier-details-headers';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';

@Component({
  selector: 'app-courtes',
  templateUrl: './courtes.component.html',
  styleUrls: ['./courtes.component.css']
})
export class CourtesComponent implements OnInit {

  formations: IMetierDetailsHeaders[] = [];

  constructor(public metierDetailsHeadersServ:MetiersDetailsHeadersService) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getFormationsCourtes();
  }

}
