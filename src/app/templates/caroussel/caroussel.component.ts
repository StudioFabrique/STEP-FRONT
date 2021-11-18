import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, Renderer2 } from '@angular/core';
/** Typer les données des slides */
export interface ISlide {
  img: string;
  text: string;
  title: string;
  cornerImg?: string;
  bgColor?:string;
  url?:string;
}

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CarousselComponent {
  /** Elément du DOM a manipuler */
  // @ViewChild('conteneur') conteneur:ElementRef = <ElementRef>{};
  @ViewChild('slider') slider:ElementRef = <ElementRef>{};

  /** Pagination : début du slide, slide actuel et écart à chaque clic */
  page:{d:number, s:number, e:number} = {d:0,s:0,e:1}; // Début du slide, slide actuel et écart à chaque clic

  /** Initialisation du moteur de rendu */
  constructor(private rnd:Renderer2){}

  @Input() slides:Array<ISlide> = [
    {
      cornerImg: '../../../assets/carousel/cornerImg/cornerImg_1.png',
      img: '../../../assets/carousel/carousel_1.png',
      title: 'La 1 règle de la frugalité numérique',
      text: 'sit amet consectetur adipisicing elit. Nesciunt ea odit ullam cumque voluptates, aspernatur cupiditate exercitationem harum minus molestiae.',
      bgColor: 'step-blue',
      url:'/'
    },
    {
      cornerImg: '../../../assets/carousel/cornerImg/cornerImg_2.png',
      img: '../../../assets/carousel/carousel_2.png',
      title: 'Les 2 règles de la frugalité numérique',
      text: 'Nesciunt ea odit ullam cumque voluptates, aspernatur cupiditate exercitationem harum minus molestiae.',
      bgColor: 'step-green',
      url:'/'
    },
    {
      cornerImg: '../../../assets/carousel/cornerImg/cornerImg_3.png',
      img: '../../../assets/carousel/carousel_3.png',
      title: 'Les 3 règles de la frugalité numérique',
      text: 'here is my text thqt will turn over the world & Nesciunt ea odit ullam cumque voluptates, aspernatur cupiditate exercitationem harum minus molestiae.',
      bgColor: 'step-yellow',
      url:'/'
    },
    {
      cornerImg: '../../../assets/carousel/cornerImg/cornerImg_4.png',
      img: '../../../assets/carousel/carousel_4.png',
      title: 'Les 4 règles de la frugalité numérique',
      text: 'here is my text thqt will turn over the world lestum martum clapsit cravatum kitas ghribstone',
      bgColor: 'step-cyan',
      url:'/'
    },
    {
      cornerImg: '../../../assets/carousel/cornerImg/cornerImg_5.png',
      img: '../../../assets/carousel/carousel_5.png',
      title: 'Les 5 règles de la frugalité numérique',
      text: 'Nesciunt ea odit ullam cumque voluptates, aspernatur cupiditate exercitationem.  the text that will turn over the world',
      bgColor: 'step-orange'
    },
  ];

  /** Gérer l'affichage des slides */
  pagination(n:number=1){
    if(n > 0 && n < this.slides.length){
      this.page.d += this.page.e;
      this.page.s ++;
    } else if(n < 0 && this.page.s > 0){
      this.page.d -= this.page.e;
      this.page.s --;
    }
    // Positionner des éléments
    this.setPos();
  }
  /** Calculer la position du slide */
  setPos(){
    this.slider.nativeElement.scroll({top:0, left:(this.slider.nativeElement.offsetWidth * this.page.s)+2, behavior: 'smooth'});
  }
}
