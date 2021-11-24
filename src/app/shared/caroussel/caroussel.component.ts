import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { Icarousel } from 'src/app/interfaces/icarousel';
//Import animation transition
import { fadeIn, fadeOut } from './carousel.animations';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css'],
  animations: [
    trigger('carouselAnimations', [
      transition('void => *', [
        useAnimation(fadeIn, { params: { time: '1000ms' } }),
      ]),
      transition('* => void', [
        useAnimation(fadeOut, { params: { time: '1000ms' } }),
      ]),
    ]),
  ],
})
export class CarousselComponent {
  constructor() {}

  currentSlide = 0;

  slides: Icarousel[] = [
    {
      image: './assets/carousel/carousel_4.png',
      title: 'La 1 règle de la frugalité numérique',
      text: 'sit amet consectetur adipisicing elit. Nesciunt ea odit ullam cumque voluptates',
      bg: '#00b0cc',
      cornerImg: '/assets/corners/white_orange.png',
    },
    {
      image: './assets/carousel/carousel_3.png',
      title: 'La 2 règle de la frugalité numérique',
      text: 'sit amet consectetur adipisicing elit. Nesciunt ea odit ullam cumque voluptates',
      bg: '#140a82',
      cornerImg: '/assets/corners/orange_white.png',
    },
    {
      image: './assets/carousel/carousel_2.png',
      title: 'La 3 règle de la frugalité numérique',
      text: 'sit amet consectetur adipisicing elit. Nesciunt ea odit ullam cumque voluptates',
      bg: '#24a640',
      cornerImg: '/assets/corners/cyan_white.png',
    },
    {
      image: './assets/carousel/carousel_1.png',
      title: 'La 4 règle de la frugalité numérique',
      text: 'lsit amet consectetur adipisicing elit. Nesciunt ea odit ullam cumque voluptates',
      bg: '#ffcc40',
      cornerImg: '/assets/corners/blue_orange.png',
    },
  ];

  previous: any = [];

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log(
      'previous has been clicked, the new current slide is: ',
      this.currentSlide
    );
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log(
      'next has been clicked, the new current slide is: ',
      this.currentSlide
    );
  }

  // slides = [
  //   {
  //     cornerImg: '/assets/corners/blue_green.png',
  //     img: '../../../assets/carousel/carousel_1.png',
  //     title: 'La 1 règle de la frugalité numérique',
  //     text: 'sit amet consectetur adipisicing elit. Nesciunt ea odit ullam cumque voluptates, aspernatur cupiditate exercitationem harum minus molestiae.',
  //     bgColor: 'step-blue',
  //   },
  //   {
  //     cornerImg: '../../../assets/corners/white_orange.png',
  //     img: '../../../assets/carousel/carousel_2.png',
  //     title: 'Les 2 règles de la frugalité numérique',
  //     text: 'Nesciunt ea odit ullam cumque voluptates, aspernatur cupiditate exercitationem harum minus molestiae.',
  //     bgColor: 'step-green',
  //   },
  //   {
  //     cornerImg: '../../../assets/corners/blue_cyan.png',
  //     img: '../../../assets/carousel/carousel_3.png',
  //     title: 'Les 3 règles de la frugalité numérique',
  //     text: 'here is my text thqt will turn over the world & Nesciunt ea odit ullam cumque voluptates, aspernatur cupiditate exercitationem harum minus molestiae.',
  //     bgColor: 'step-yellow',
  //   },
  //   {
  //     cornerImg: '../../../assets/corners/orange_white.png',
  //     img: '../../../assets/carousel/carousel_4.png',
  //     title: 'Les 4 règles de la frugalité numérique',
  //     text: 'here is my text thqt will turn over the world lestum martum clapsit cravatum kitas ghribstone',
  //     bgColor: 'step-cyan',
  //   },
  //   {
  //     cornerImg: '../../../assets/corners/blue_yellow.png',
  //     img: '../../../assets/carousel/carousel_5.png',
  //     title: 'Les 5 règles de la frugalité numérique',
  //     text: 'Nesciunt ea odit ullam cumque voluptates, aspernatur cupiditate exercitationem.  the text that will turn over the world',
  //     bgColor: 'step-orange',
  //   },
  // ];
}
