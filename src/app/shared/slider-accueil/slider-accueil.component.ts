import { Component, Input, OnInit } from '@angular/core';
import { ISliderAccueil } from 'src/app/interfaces/islider-accueil';
import { SliderAccueilService } from 'src/app/services/slider-accueil.service';

@Component({
  selector: 'app-slider-accueil',
  templateUrl: './slider-accueil.component.html',
  styleUrls: ['./slider-accueil.component.css'],
})
export class SliderAccueilComponent implements OnInit {
  @Input() slides!: ISliderAccueil[];

  constructor(public sliderAccueilServ: SliderAccueilService) { }

  arrowleft = `<svg class='a-left control-c prev slick-prev arrows' width="2450" height="4474" viewBox="0 0 2450 4474" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2237 213L213 2237L2237 4261"  stroke-width="300" stroke-linecap="square"/>
  </svg>
  `;
  arrowright = `<svg class='a-right control-c next slick-next arrows' width="2450" height="4474" viewBox="0 0 2450 4474" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M213 213L2237 2237L213 4261" stroke-width="300" stroke-linecap="square"/>
  </svg>
  `;

  ngOnInit(): void {}

  slideConfig = {
    cssEase: 'ease-out',
    draggable: true,
    prevArrow: this.arrowleft,
    nextArrow: this.arrowright,
    accessibility: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 10,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: false,
    fade: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          speed: 1500,
          autoplaySpeed: 2000,
          autoplay: true,
          arrows: true,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          speed: 3000,
          autoplaySpeed: 2000,
          autoplay: true,
          arrows: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          speed: 2000,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  slickInit(e: any) {}

  breakpoint(e: any) {}

  afterChange(e: any) {}

  beforeChange(e: any) {}
}
