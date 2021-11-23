import { Component, OnInit } from '@angular/core';
import { IMetierDetailsHeaders } from 'src/app/interfaces/imetier-details-headers';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';

@Component({
  selector: 'app-applications-mobiles',
  templateUrl: './applications-mobiles.component.html',
  styleUrls: ['./applications-mobiles.component.css']
})
export class ApplicationsMobilesComponent implements OnInit {

  formations: IMetierDetailsHeaders[] = [];

  constructor(public metierDetailsHeadersServ:MetiersDetailsHeadersService) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getApplicationsMobiles();
  }

}
