import { Component, OnInit } from '@angular/core';

export interface Partners {
  src: string,
  alt: string,
  title: string,
  lien: string,
  
}


@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }


  partners: Partners[] = [
    {
      src:'./assets/partenaires/direccts.png',
      alt:'direccts',
      title:'direccts',
      lien:"abc"
    },
    {
      src:'./assets/partenaires/pyrenees_atlantiques.png',
      alt:'pyrenees_atlantiques',
      title:'pyrenees_atlantiques',
      lien:"abc"
    },
    {
      src:'./assets/partenaires/eu_sengage.png',
      alt:'eu_sengage',
      title:'eu_sengage',
      lien:"abc"
    },
    {
      src:'./assets/partenaires/total.png',
      alt:'total',
      title:'total',
      lien:"abc"
    },
    {
      src:'./assets/partenaires/pau.png',
      alt:'pau',
      title:'pau',
      lien:"abc"
    },
    {
      src:'./assets/partenaires/nouvelle_aquitaine.png',
      alt:'nouvelle_aquitaine',
      title:'nouvelle_aquitaine',
      lien:"abc"
    },
    {
      src:'./assets/partenaires/nouvelle_aquitaine.png',
      alt:'nouvelle_aquitaine',
      title:'nouvelle_aquitaine',
      lien:"abc"
    },
   
    {
      src:'./assets/partenaires/nouvelle_aquitaine.png',
      alt:'nouvelle_aquitaine',
      title:'nouvelle_aquitaine',
      lien:"abc"
    },
   
   
  ]

  swipperConfig = {
    enabled: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    draggable: true,
    autoplaySpeed: 1000,
    initialSlide: 0,
    autoplay: false,
    arrows: false,
    mobileFirst: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          draggable: false,
          infinite: true,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 1000,
          infinite: true,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 1000
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
