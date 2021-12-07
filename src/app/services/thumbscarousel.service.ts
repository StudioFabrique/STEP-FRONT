import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IThumbsCarousel } from '../interfaces/ithumbs-carousel';

@Injectable({
  providedIn: 'root'
})
export class ThumbscarouselService {

  slidesThmbs: IThumbsCarousel[] = [];

  constructor(private thumbsServ: HttpClient) { }

  getImgThumbsNumerisation(){
    this.thumbsServ.get('http://localhost:4200/assets/data/carouselThumbs/thumbs-numerisation.json').subscribe((data:any) => {
      this.slidesThmbs = data;
      console.log("my carousel",this.slidesThmbs);
      
    })
  }

  getImgThumbsTraitementDonnees(){
    this.thumbsServ.get('http://localhost:4200/assets/data/carouselThumbs/thumbs-traitementDonnees.json').subscribe((data:any) => {
      this.slidesThmbs = data;
      console.log("my carousel",this.slidesThmbs);
      
    })
  }

  getImgThumbsEditique(){
    this.thumbsServ.get('http://localhost:4200/assets/data/carouselThumbs/thumbs-editique.json').subscribe((data:any) => {
      this.slidesThmbs = data;
      console.log("my carousel",this.slidesThmbs);
      
    })
  }

}
