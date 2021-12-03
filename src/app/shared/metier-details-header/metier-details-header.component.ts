import { Component, Input, OnInit } from '@angular/core';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';

@Component({
  selector: 'app-metier-details-header',
  templateUrl: './metier-details-header.component.html',
  styleUrls: ['./metier-details-header.component.css']
})
export class MetierDetailsHeaderComponent implements OnInit {

 
  constructor(public metierDetailsHeaderServ: MetiersDetailsHeadersService) { }

  ngOnInit(): void {
  }


  
}
