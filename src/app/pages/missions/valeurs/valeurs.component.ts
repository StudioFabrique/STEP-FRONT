import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valeurs',
  templateUrl: './valeurs.component.html',
  styleUrls: ['./valeurs.component.css']
})
export class ValeursComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  img = {
    valImg: "default",
    title: "Valeurs",
    alt: "valeurs"
  }

  bgImg="assets/img/office.jpg"
  corner = "assets/corners/blue_cyan.png"
  title = "STEP, la belle histoire"
  titleBold = "Une histoire qui dure depuis 20 ans"
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut sagittis odio. Cras sit amet interdum eros. Proin varius arcu eget eros varius luctus. Proin mi ligula, tempus non feugiat vitae, venenatis vel magna. "

  // ARTICLE INTRO TEXT
  intro = 
    {
      "p1": `Née de l'initiative d'acteurs de la société civile et de l'engagement de TOTAL, il y a 20 ans, STEP, entreprise responsable, n'a cessé de croire et de miser sur l'innovation pour durer et créer un modèle économique viable, offrant un panel de services toujours plus diversifié et de véritables parcours d’insertion à valeur ajoutée.
Acteur économique de premier plan sur son domaine d’activité dans le grand Sud-Ouest, STEP s’appuie sur 20 années d’expertise en matière de gestion de flux documentaires et d’environnement informatique associé. Kenny Bertonazzi, directeur général de STEP depuis 2002, fortement investi dans la création de STEP avec le groupe b2s (Comdata France) dont il était le directeur palois, présente une croissance à deux chiffres de l’ordre de + 10% par an. En 2020, l’entreprise a enregistré une exploitation de 1 555 000 €.
Pour l’année 2021, le prévisionnel d’exploitation avoisine les 2,1 millions d’euros. Une très forte hausse liée au développement des nouvelles activités. Actuellement, STEP emploie 40 collaborateurs à plein temps dont 16 personnes en parcours d’insertion et 60 apprenants suivent ses parcours de formation.`
    }

  
  // CONTENT PAGE TEXT

  content = [
    {
      "headTitle": "UNE DOUBLE IDENTITÉ ASSUMÉE",
      "bodyText": `STEP assume une double identité : être une entreprise compétitive doublée d'une entreprise solidaire. Et ça marche !. Depuis 20 ans, STEP développe son engagement au quotidien en affichant de véritables objectifs de développement. Sa pérennité est la preuve qu'on peut viser l'inclusion par le travail associée à une exigence de qualité. 

Chez STEP, tout le monde à sa chance, les profils des salariés en contrat d'insertion le démontrent, personnes en difficulté sur le marché de l'emploi, absence ou faiblesse des qualifications pour certains, situations de retour à l’emploi après une longue période d’inactivité, ou d’arrivée récente en France, etc... tous développent des compétences au service d'un projet global.

Entreprise citoyenne et fière de l'être, bien implantée sur son territoire, STEP va au-delà d'un objectif purement financier en croyant à une économie plus durable, plus humaine et à la cohésion du territoire qu'elle peut contribuer à développer.`
    },

    {
      "headTitle": "UN POSITIONNEMENT FORT",
      "bodyText": `Dès sa création, STEP s'est investi pleinement dans sa mission d'insertion en s'appuyant sur le développement d'activités liées à un secteur en devenir. Un positionnement autour du numérique, de l'imagerie et de l'informatique qui fait sa force aujourd’hui.

En investissant ce secteur par le biais de l'insertion, STEP a fait le choix de la diversité dans la proposition de parcours inclusifs originaux, de donner également des clés pour ne pas subir la transformation numérique à l'œuvre dans notre société, y trouver sa place professionnellement, tout en offrant des services de qualité.

Belle manière pour STEP de contribuer à l’effort de cohésion sociale sur le territoire via l'accès à l'emploi à durée déterminée mais à temps complet, en permettant à des personnes au parcours fragilisé de retrouver confiance.`

    }
  ]

  valeurs = {
      mainTitle: "DES VALEURS DURABLES",
      phrase: "STEP c’est donc une philosophie, ce sont aussi des valeurs fortes portées par chacun des collaborateurs de l’entreprise :",
      vals: [
        {
          valTitre: "L’ INCLUSION:",
          valText: "Nous portons un projet social au service d’un territoire  via l’accompagnement à l’emploi, l’insertion, la lutte contre la discrimination et l’isolement, en intégrant les enjeux spécifiques des zones rurales, via le développement de la compétence numérique."
        },
        {
          valTitre: "L’ INNOVATION:",
          valText: "Acteur clé de la numérisation, nous développons sans relâche une offre innovante en étant par exemple, le premier opérateur postal alternatif en Nouvelle Aquitaine et en portant une école de développeur Web."
        },
        {
          valTitre: "LA QUALITE:",
          valText: "20 ans d’expérience liée à la gestion de projets pour le compte de clients de 1er ordre,  à la numérisation et la mise en œuvre nous permettent de mener à bien des projets, du plus simple au plus complexe."
        },
        {
          valTitre:  "L’ INVENTIVITE:",
          valText: "Si notre cœur de métier est bien le numérique, celui-ci est surtout le terreau à de nouvelles idées et de nouvelles perspectives de développement."
         
        },
        {
          valTitre: "LA DURABILITE:",
          valText: "au quotidien, en tant qu’entreprise RSE nous mettons en œuvre des pratiques éco-responsables : éco-conduite, amélioration des conditions de travail, prise en compte de l’aspect environnemental dans nos pratiques numériques et incitation de nos clients à les adopter, mise en place de la « prestation suspendue » sur le modèle du « café suspendu » (cf Atelier numérique)…"
        },
        {
          valTitre: "L’ ECO-CONCEPTION:",
          valText: "Chacun de nos projets et services  riment avec éco-conception et responsabilité."
        }
      ]

    }


}
