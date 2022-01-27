import { Component, Input, OnInit } from '@angular/core';
import { IClients } from 'src/app/interfaces/ipartenaires';
import { PartenairesService } from 'src/app/services/partenaires.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {


  @Input() clients!: IClients[]


  constructor(public clientServ: PartenairesService) { }

  ngOnInit(): void {
    
  }
  
  swiperConfig = {
    enabled: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    draggable: true,
    autoplaySpeed: 1000,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    mobileFirst: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          draggable: true,
          infinite: true,
          autoplaySpeed: 2000,
          autoplay: true,

        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
          autoplay: true,
          infinite: true,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,

        }
      }
    ]
  }


  slickInit(e: any) {
   
  }

  breakpoint(e: any) {
 
  }

  afterChange(e: any) {
 
  }

  beforeChange(e: any) {
    
  }

}
