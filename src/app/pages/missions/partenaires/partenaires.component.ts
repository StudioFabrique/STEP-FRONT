import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent implements OnInit {


  bgColor = "#00B0CC"
  bgImg="assets/img/office.jpg"
  corner = "assets/corners/blue_orange.png"
  title = "Ils nous font confiance..."
  accroche = "... et nous aussi !"
  text = "La confiance est essentielle pour mener à bien nos missions et répondre aux demandes les plus variées de nos clients. "



  intro  = {
    "p1": `Parmi les clients de STEP, on trouve de nombreuses références de grands groupes, de collectivités locales et également de PME/PMI : `

  }


  partenaires = [
    {
      partLogo: "/assets/partenaires/direccts.png",
      alt: "partenaires",
      title: "DIRECCTS",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde aperiam culpa porro id voluptatibus."
    },
    {
      partLogo: "/assets/partenaires/eu_sengage.png",
      alt: "partenaires",
      title: "EU S'engage",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde aperiam culpa porro id voluptatibus."
    },
    {
      partLogo: "/assets/partenaires/eu.png",
      alt: "partenaires",
      title: "Union Européen",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde aperiam culpa porro id voluptatibus."
    },
    {
      partLogo: "/assets/partenaires/nouvelle_aquitaine.png",
      alt: "partenaires",
      title: "Nouvelle Aquitaine",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde aperiam culpa porro id voluptatibus."
    },
    {
      partLogo: "/assets/partenaires/pau.png",
      alt: "partenaires",
      title: "Ville de Pau",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde aperiam culpa porro id voluptatibus."
    },
    {
      partLogo: "/assets/partenaires/pyrenees_atlantiques.png",
      alt: "partenaires",
      title: "Pyrenées Atlantiques",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde aperiam culpa porro id voluptatibus."
    },
    {
      partLogo: "src/assets/partenaires/total.png",
      alt: "partenaires",
      title: "TOTAL",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde aperiam culpa porro id voluptatibus."
    },
  

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
