import { Component, OnInit } from '@angular/core';
import { IMetierDetailsHeaders } from 'src/app/interfaces/imetier-details-headers';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';

@Component({
  selector: 'app-applications-web',
  templateUrl: './applications-web.component.html',
  styleUrls: ['./applications-web.component.css']
})
export class ApplicationsWebComponent implements OnInit {

  formations: IMetierDetailsHeaders[] = [];

  constructor(public metierDetailsHeadersServ:MetiersDetailsHeadersService) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getApplicationsWeb();
  }

}
