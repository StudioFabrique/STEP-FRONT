import { Component, OnInit } from '@angular/core';
import { ThumbscarouselService } from 'src/app/services/thumbscarousel.service';

@Component({
  selector: 'app-thumbnails-carousel',
  templateUrl: './thumbnails-carousel.component.html',
  styleUrls: ['./thumbnails-carousel.component.css']
})
export class ThumbnailsCarouselComponent implements OnInit {

  constructor(public thumbnailServ: ThumbscarouselService) { }

  ngOnInit(): void {
  }

  imagesSlider = {
    speed:300,
    slidesToShow:1,
    slidesToScroll:1,
    cssEase:'linear',
    fade:true,
    autoplay: false,
    draggable:false,
    prevArrow:'.client-feedback .prev-arrow',
    nextArrow:'.client-feedback .next-arrow',
    asNavFor:".thumbs",
  };
  
  thumbnailsSlider = {
    speed:0,
    slidesToShow:3,
    slidesToScroll:0,
    cssEase:'linear',
    autoplay: false,
    centerMode:true,
    draggable:true,
    focusOnSelect:true,
    asNavFor:".feedback",
    // prevArrow:'.client-thumbnails .prev-arrow',
    // nextArrow:'.client-thumbnails .next-arrow',
  };
}
