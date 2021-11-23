import { Component, OnInit } from '@angular/core';
import { IMetierDetailsHeaders } from 'src/app/interfaces/imetier-details-headers';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';


@Component({
  selector: 'app-editique',
  templateUrl: './editique.component.html',
  styleUrls: ['./editique.component.css']
})
export class EditiqueComponent implements OnInit {


  constructor(public metierDetailsHeadersServ:MetiersDetailsHeadersService) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getFormationsLongues();
  }

}
