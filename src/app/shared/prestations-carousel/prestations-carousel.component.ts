import { Component, OnInit } from '@angular/core';
import { PrestationsCarouselService } from 'src/app/services/prestations-carousel.service';



@Component({
  selector: 'app-prestations-carousel',
  templateUrl: './prestations-carousel.component.html',
  styleUrls: ['./prestations-carousel.component.css'],
})
export class PrestationsCarouselComponent implements OnInit {


  constructor(public prestationServ: PrestationsCarouselService) {}

  ngOnInit(): void {}

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 1000,
    autoplay: false,
    fade: true,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  swipperConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 100,
    autoplaySpeed: 2000,
    autoplay: false,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
