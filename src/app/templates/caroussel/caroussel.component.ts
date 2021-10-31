import { Component, OnInit, Input, EventEmitter } from '@angular/core';

export interface Slide {
  image: string;
  text: string;
  title: string;
  cornerImg: string;
}

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css'],
})
export class CarousselComponent {
  slides = [
    {
      cornerImg: '../../../assets/corners/blue_green.png',
      img: '../../../assets/carousel/carousel_1.png',
      title: 'La 1 règle de la frugalité numérique',
      text: 'sit amet consectetur adipisicing elit. Nesciunt ea odit ullam cumque voluptates, aspernatur cupiditate exercitationem harum minus molestiae.',
      bgColor: 'step-blue',
    },
    {
      cornerImg: '../../../assets/corners/white_orange.png',
      img: '../../../assets/carousel/carousel_2.png',
      title: 'Les 2 règles de la frugalité numérique',
      text: 'Nesciunt ea odit ullam cumque voluptates, aspernatur cupiditate exercitationem harum minus molestiae.',
      bgColor: 'step-green',
    },
    {
      cornerImg: '../../../assets/corners/blue_cyan.png',
      img: '../../../assets/carousel/carousel_3.png',
      title: 'Les 3 règles de la frugalité numérique',
      text: 'here is my text thqt will turn over the world & Nesciunt ea odit ullam cumque voluptates, aspernatur cupiditate exercitationem harum minus molestiae.',
      bgColor: 'step-yellow',
    },
    {
      cornerImg: '../../../assets/corners/orange_white.png',
      img: '../../../assets/carousel/carousel_4.png',
      title: 'Les 4 règles de la frugalité numérique',
      text: 'here is my text thqt will turn over the world lestum martum clapsit cravatum kitas ghribstone',
      bgColor: 'step-cyan',
    },
    {
      cornerImg: '../../../assets/corners/blue_yellow.png',
      img: '../../../assets/carousel/carousel_5.png',
      title: 'Les 5 règles de la frugalité numérique',
      text: 'Nesciunt ea odit ullam cumque voluptates, aspernatur cupiditate exercitationem.  the text that will turn over the world',
      bgColor: 'step-orange',
    },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 3000,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: true,
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
