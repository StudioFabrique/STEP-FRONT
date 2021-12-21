import { Component, Input, OnInit } from '@angular/core';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { PartenairesService } from 'src/app/services/partenaires.service';



@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  @Input() partenaires!: IPartenaires[];

  constructor( public partenaireServ: PartenairesService) { }

  ngOnInit() {
   
  }

  swiperConfig = {
    enabled: true,
    slidesToShow: 1,
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
          slidesToShow: 5,
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
          draggable: true,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,

        }
      },
      {
        breakpoint: 375,
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
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

}
