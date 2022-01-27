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

  constructor(public sliderAccueilServ: SliderAccueilService) {}

  arrowleft = '/assets/svg/arrow-left.svg';
  arrowright = '/assets/svg/arrow-right.svg';

  previous = `<img class='a-left control-c prev slick-prev ' style='width:50px; left: -50px;' src=${this.arrowleft}>`;

  next = `<img class='step-blue-color a-right control-c next slick-next' style='width:50px; right: -50px;' src=${this.arrowright}>`;

  ngOnInit(): void {}

  slideConfig = {
    cssEase: 'ease-out',
    draggable: true,
    prevArrow: this.previous,
    nextArrow: this.next,
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
