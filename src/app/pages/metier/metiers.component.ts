import { Component, OnInit } from '@angular/core';


export interface Content {
  image: string,
  text: string,
  title: string
}
@Component({
  selector: 'app-metiers',
  templateUrl: './metiers.component.html',
  styleUrls: ['./metiers.component.css']
})
export class MetiersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gridColumns = 3;

  contents = [
    { img: '../../../assets/solutions/formations.jpg', 
      title:"Flux Documentaire", 
      text:"sit amet consectetur adipisicing  amet cupiditate prumsac"
    },

    { img: '../../../assets/solutions/studio.jpg', 
      title:"Studio de Développement", 
      text:"Nesciunt ea odit ullam cumque voluptates"
    },

    { img: '../../../assets/solutions/atelier.jpg', 
      title:"L'atelier Numérique", 
      text:"aspernatur cupiditate exercitationem molestiae." 
    },

    { img: '../../../assets/solutions/livraison.jpg', 
      title:"Livraison Urbaine", 
      text:"here is my text thqt will turn over the world" 
    },

    { img: '../../../assets/solutions/service_post.jpg', 
      title:"Service Postal", 
      text:"the text that will turn over the world"
    },

    { img: '../../../assets/solutions/concierge.jpg', 
      title:"Conciergerie d'Entreprise", 
      text:"the text that will turn over the world"
  },

  { img: '../../../assets/solutions/formations.jpg', 
    title:"Formations", 
    text:"the text that will turn over the world over and over again"
  },


  ];

}
