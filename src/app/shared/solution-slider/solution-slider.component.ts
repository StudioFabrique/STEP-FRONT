import { Component, OnInit } from '@angular/core';
import { IMetiersList } from 'src/app/interfaces/imetier-details-headers';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';

@Component({
  selector: 'app-solution-slider',
  templateUrl: './solution-slider.component.html',
  styleUrls: ['./solution-slider.component.css'],
})
export class SolutionSliderComponent implements OnInit {
  metiersList: IMetiersList[] = [];
  constructor(public metierServ: MetiersDetailsHeadersService) {}

  ngOnInit(): void {
    this.metierServ.getMetiers$();
  }

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

  slickInit(e: any) {}

  breakpoint(e: any) {}

  afterChange(e: any) {}

  beforeChange(e: any) {}
}
