import { Component, Input, OnInit } from '@angular/core';
import { ISliderAccueil } from 'src/app/interfaces/islider-accueil';
import { SliderAccueilService } from 'src/app/services/slider-accueil.service';

@Component({
  selector: 'app-slider-accueil',
  templateUrl: './slider-accueil.component.html',
  styleUrls: ['./slider-accueil.component.css']
})
export class SliderAccueilComponent implements OnInit {

  @Input() slides!: ISliderAccueil[]

  constructor(public sliderAccueilServ: SliderAccueilService) { }

  ngOnInit(): void {
  }


  slideConfig = {
    cssEase:'ease-out',
    draggable:true,
    prevArrow:"<img class='a-left control-c prev slick-prev' style='width:50px; left: -50px;' src='/assets/svg/arrow-left.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' style='width:50px; right: -50px;' src='/assets/svg/arrow-right.svg'>",
    accessibility: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 200,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: false,
    fade: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 3000,
          autoplaySpeed: 2000,
          autoplay: true,
          arrows: true,
          fade: true,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 3000,
          autoplaySpeed: 2000,
          autoplay: true,
          arrows: true,
          fade: true,
          infinite: true,
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
