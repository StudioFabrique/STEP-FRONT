import { Component, OnInit } from '@angular/core';
import { IMetierDetailsHeaders } from 'src/app/interfaces/imetier-details-headers';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.css']
})
export class AssistanceComponent implements OnInit {


  constructor(public metierDetailsHeadersServ:MetiersDetailsHeadersService) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getAssistance();
  }

}
