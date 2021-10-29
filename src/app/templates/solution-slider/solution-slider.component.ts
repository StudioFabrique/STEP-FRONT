import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-solution-slider',
  templateUrl: './solution-slider.component.html',
  styleUrls: ['./solution-slider.component.css']
})
export class SolutionSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  slides = [
    { img: '../../../assets/solutions/formations.jpg', 
      title:"Flux Documentaire", 
      text:"Numérisation hauts volumes, patrimoniale, microformes, hors format, grand format et traitement de données. Editique, impression déportée de courriers de gestion"
    },

    { img: '../../../assets/solutions/studio.jpg', 
      title:"Studio de Développement", 
      text:"logiciels Web éco-conçus pour des solutions informatiques sur mesure (développement web, système d’information, hébergement, base de données, applications…)"
    },

    { img: '../../../assets/solutions/atelier.jpg', 
      title:"L'atelier Numérique", 
      text:"pour des services de maintenance et d’assistance informatique ou du matériel informatique reconditionné." 
    },

    { img: '../../../assets/solutions/livraison.jpg', 
      title:"Livraison Urbaine", 
      text:"courte ou longue, formation numérique, digitale pour lutter contre la fracture numérique et promouvoir l’emploi durable" 
    },

    { img: '../../../assets/solutions/service_post.jpg', 
      title:"Service Postal", 
      text:"premier opérateur postal alternatif de Nouvelle Aquitaine ; Collecte, remise et distribution de courrier et de recommandé sur Pau."
    },

    { img: '../../../assets/solutions/formations.jpg', 
      title:"Conciergerie d'Entreprise", 
      text:"(être) au bureau comme à la maison, avec La Conciergerie solidaire. "
  },

  { img: '../../../assets/solutions/formations.jpg', 
    title:"Formations", 
    text:"courte ou longue, formation numérique, digitale pour lutter contre la fracture numérique et promouvoir l’emploi durable"
},
  ];


  metiers = [
    {title:"Flux Documentaire"},
    {title:"Studio de Développement"},
    {title:"L'atelier Numérique"},
    {title:"Livraison Urbaine"},
    {title:"Service Postal"},
    {title:"Conciergerie d'Entreprise"},
    {title:"Formations"},
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 1000,
    autoplay: false,
 fade: true,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }


  swipperConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 100,
    autoplaySpeed: 2000,
    autoplay: false,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }



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
