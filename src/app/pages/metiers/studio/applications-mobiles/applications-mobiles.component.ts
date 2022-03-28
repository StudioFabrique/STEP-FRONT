import { Component, OnInit } from '@angular/core';
import { IMetierDetailsHeaders } from 'src/app/interfaces/imetier-details-headers';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';
import { PartenairesService } from 'src/app/services/partenaires.service';
import { ThumbscarouselService } from 'src/app/services/thumbscarousel.service';

@Component({
  selector: 'app-applications-mobiles',
  templateUrl: './applications-mobiles.component.html',
  styleUrls: ['./applications-mobiles.component.css']
})
export class ApplicationsMobilesComponent implements OnInit {

  formations: IMetierDetailsHeaders[] = [];
  partenaires: IPartenaires[] = [];


  constructor(public metierDetailsHeadersServ:MetiersDetailsHeadersService, public thumbsServ: ThumbscarouselService,
    public partenaireServ: PartenairesService) { }

  ngOnInit(): void {
    this.metierDetailsHeadersServ.getApplicationsMobiles();
    this.thumbsServ.getImgThumbsAppMobiles();

    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res;
        console.log(res);
        
      }
    )
  }




  articles= [
   
    {
     
      image: '',
    }
  ];

}
