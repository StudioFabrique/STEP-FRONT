import { Component, OnInit } from '@angular/core';


export interface Content {
  image: string,
  text: string,
  title: string
}



@Component({
  selector: 'app-metier',
  templateUrl: './metier.component.html',
  styleUrls: ['./metier.component.css']
})
export class MetierComponent implements OnInit {


  image="assets/img/corner-orange.png" 
  title="Des solutions et des métiers " 
  titleBold="adaptés à vos besoins" 
  text="STEP vous accompagne en vous proposant des solutions globales et ses expertises dans plusieurs grands secteurs d’activités. Les flux documentaires et le back office, les services de territoire et l’ingénierie informatique." 

  


  metierImage="assets/img/half_orange.png" 
  metierTitle="Mes Metiers" 
  metierTitleBold="Le metier de l'avenir" 
  metierText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut sagittis odio. Cras sit amet interdum eros. Proin varius arcu eget eros varius luctus. Proin mi ligula, tempus non feugiat vitae, venenatis vel magna. " 

  constructor() {}

  ngOnInit(): void {
  }

  gridColumns = 3;



  contents = [
    { img: '../../../assets/solutions/formations.jpg', 
      title:"Flux Documentaires", 
      text:"Numérisation hauts volumes, patrimoniale, microformes, hors format, grand format et traitement de données. Editique, impression déportée de courriers de gestion.",
      link:'flux-documentaire'
    },

    { img: '../../../assets/solutions/studio.jpg', 
      title:"Studio de Développement", 
      text:"Logiciels web éco-conçus pour des solutions informatiques sur mesure (développement web, système d’information, hébergement, base de données, applications …)",
      link:'studio'
    },

    { img: '../../../assets/solutions/atelier.jpg', 
      title:"L'atelier Numérique", 
      text:"Pour des services de maintenance et d’assistance informatique ou du matériel informatique reconditionné." ,
      link:'atelier-numerique'
    },

    { img: '../../../assets/solutions/livraison.jpg', 
      title:"Livraison Urbaine", 
      text:"Petite logistique - Livraison Urbaine : dernier kilomètre en vélo cargo de palettes et colis, ramassage de bio déchets. distribution, livraison triporteur et collecte de proximité. " ,
      link:'livraison'
    },

    { img: '../../../assets/solutions/service_post.jpg', 
      title:"Service Postal", 
      text:"Premier opérateur postal alternatif de Nouvelle Aquitaine ; Collecte, remise et distribution de courrier et de recommandé sur Pau",
      link:'service-postal'
    },

    { img: '../../../assets/solutions/concierge.jpg', 
      title:"Conciergerie d'Entreprise", 
      text:"(être) au bureau comme à la maison, avec la Conciergerie Solidaire. Améliorer la vie de l'entreprise. ",
      link:'conciergerie'
  },

  { img: '../../../assets/solutions/formations.jpg', 
    title:"Formations", 
    text:"Formation et inclusion numérique : courte ou longue, formation numérique, digitale pour lutter contre la fracture numérique et promouvoir l’emploi durable",
    link:'formations'
  },

  ];


}
