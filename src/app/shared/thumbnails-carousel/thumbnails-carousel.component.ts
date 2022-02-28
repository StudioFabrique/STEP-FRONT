import { Component, Input, OnInit } from '@angular/core';
import { IImages } from 'src/app/interfaces/iimages';
import { FirebaseImagesService } from 'src/app/services/firebase-images.service';


@Component({
  selector: 'app-thumbnails-carousel',
  templateUrl: './thumbnails-carousel.component.html',
  styleUrls: ['./thumbnails-carousel.component.css']
})
export class ThumbnailsCarouselComponent implements OnInit {


  @Input() images: IImages[] = [];

  constructor(
    // public thumbnailServ: ThumbscarouselService, 
    public firebaseServ: FirebaseImagesService) { }
  
    arrowleft = `<svg class='a-left control-c prev slick-prev arrows' width="2450" height="4474" viewBox="0 0 2450 4474" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2237 213L213 2237L2237 4261"  stroke-width="300" stroke-linecap="square"/>
    </svg>
    `;
    arrowright = `<svg class='a-right control-c next slick-next arrows' width="2450" height="4474" viewBox="0 0 2450 4474" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M213 213L2237 2237L213 4261" stroke-width="300" stroke-linecap="square"/>
    </svg>
    `;
  

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
    prevArrow: this.arrowleft,
    nextArrow: this.arrowright,
    asNavFor:".thumbs",
  };
  
  thumbnailsSlider = {
    speed:0,
    arrows: false,
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
