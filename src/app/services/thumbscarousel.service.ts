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


  getImgThumbsAppWeb(){
    this.thumbsServ.get('http://localhost:4200/assets/data/carouselThumbs/thumbs-appweb.json').subscribe((data:any) => {
      this.slidesThmbs = data;
      console.log("my carousel",this.slidesThmbs);
      
    })
  }

  getImgThumbsAppMobiles(){
    this.thumbsServ.get('http://localhost:4200/assets/data/carouselThumbs/thumbs-appMobiles.json').subscribe((data:any) => {
      this.slidesThmbs = data;
      console.log("my carousel",this.slidesThmbs);
      
    })
  }

  getImgThumbsAssistances(){
    this.thumbsServ.get('http://localhost:4200/assets/data/carouselThumbs/thumbs-assistance.json').subscribe((data:any) => {
      this.slidesThmbs = data;
      console.log("my carousel",this.slidesThmbs);
      
    })
  }

  getImgThumbsRecondition(){
    this.thumbsServ.get('http://localhost:4200/assets/data/carouselThumbs/thumbs-recondition.json').subscribe((data:any) => {
      this.slidesThmbs = data;
      console.log("my carousel",this.slidesThmbs);
      
    })
  }


  getImgThumbsFormationsCourtes(){
    this.thumbsServ.get('http://localhost:4200/assets/data/carouselThumbs/thumbs-formations-courtes.json').subscribe((data:any) => {
      this.slidesThmbs = data;
      console.log("my carousel",this.slidesThmbs);
      
    })
  }


  getImgThumbsFormationsLongues(){
    this.thumbsServ.get('http://localhost:4200/assets/data/carouselThumbs/thumbs-formations-longues.json').subscribe((data:any) => {
      this.slidesThmbs = data;
      console.log("my carousel",this.slidesThmbs);
      
    })
  }

  getImgThumbsLivraison(){
    this.thumbsServ.get('http://localhost:4200/assets/data/carouselThumbs/thumbs-livraison.json').subscribe((data:any) => {
      this.slidesThmbs = data;
      console.log("my carousel",this.slidesThmbs);
      
    })
  }

  getImgThumbsPoste(){
    this.thumbsServ.get('http://localhost:4200/assets/data/carouselThumbs/thumbs-poste.json').subscribe((data:any) => {
      this.slidesThmbs = data;
      console.log("my carousel",this.slidesThmbs);
      
    })
  }

  getImgThumbsConciergerie(){
    this.thumbsServ.get('http://localhost:4200/assets/data/carouselThumbs/thumbs-conciergerie.json').subscribe((data:any) => {
      this.slidesThmbs = data;
      console.log("my carousel",this.slidesThmbs);
      
    })
  }
}
