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

  bgs = "assets/img/solutions.png"
  image="assets/img/corner-orange.png" 
  title="Hello metier" 
  titleBold="byby metier" 
  text="metier is metier" 
  defaultColor="transparent"
  style = `background-image:url('${this.bgs}'); background-size: cover;`


  metierBgs = "assets/img/flux_doc.jpg"
  metierImage="assets/img/half_orange.png" 
  metierTitle="Mes Metiers" 
  metierTitleBold="Le metier de l'avenir" 
  metierText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut sagittis odio. Cras sit amet interdum eros. Proin varius arcu eget eros varius luctus. Proin mi ligula, tempus non feugiat vitae, venenatis vel magna. " 
  metierDefaultColor="transparent"
  metierStyle = `background-image:url('${this.metierBgs}'); background-size: contain; background-position: left center;`

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
