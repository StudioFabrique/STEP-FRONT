import { Component, OnInit } from '@angular/core';
import { IMetierDetailsHeaders } from 'src/app/interfaces/imetier-details-headers';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';
import { ThumbscarouselService } from 'src/app/services/thumbscarousel.service';

@Component({
  selector: 'app-applications-web',
  templateUrl: './applications-web.component.html',
  styleUrls: ['./applications-web.component.css']
})
export class ApplicationsWebComponent implements OnInit {

  formations: IMetierDetailsHeaders[] = [];

  constructor(public metierDetailsHeadersServ:MetiersDetailsHeadersService,  public thumbsServ: ThumbscarouselService) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getApplicationsWeb();
    this.thumbsServ.getImgThumbsAppWeb();
  }




  articles= [
   
    {
      column: '',
      image: '',
    }
  ];

}
