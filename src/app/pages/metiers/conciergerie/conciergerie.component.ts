import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conciergerie',
  templateUrl: './conciergerie.component.html',
  styleUrls: ['./conciergerie.component.css']
})
export class ConciergerieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bgImg="assets/img/office.jpg"
  corner = "assets/corners/white_orange.png"
  title="";
  titleBold="Des services pour améliorer le quotidien des salariés";
  text="La conciergerie d’entreprise, c’est une de nos dernières créations, un beau projet de services aux collaborateurs des organisations que nous accompagnons en collaboration avec la Conciergerie Solidaire de Bordeaux.";




  articles = [
    {
      icon: '/assets/svg/stack.svg',
      titre: "Conciergerie d'Entreprise",
      // titre: 'Une ingénierie dédiée à chaque projet de numérisation',
      accroche:
        'Des collaborateurs heureux, ça n’a pas de prix, non ? ',
      column: `Faciliter la vie, alléger cette fameuse charge mentale, pour être plus serein professionnellement, retrouver du temps pour soi, pour les autres. Mais aussi rendre plus fluide l'organisation de l'entreprise.
      Comment allier tout cela et plus encore ? … La conciergerie d’entreprise permet à vos salariés d’avoir accès sur leurs lieux de travail, à un large panel de services clés en main répondant à tous les besoins du quotidien, de la livraison de courses à la garde d’enfants en passant par le repassage à domicile, mais aussi de développer des services “pros” pour votre structure.
     `,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
      text: `
La conciergerie d’entreprise est un agrégateur de services et un facilitateur de liens. 
  
Le concierge enregistre la demande, assure la relation client (prise de commande, rendu de la mission) et coordonne la prestation avec un partenaire de services spécialisé et qualifié. Ainsi déchargés de certaines tâches du quotidien, les collaborateurs peuvent se concentrer sur leur travail et mieux concilier vie de famille, loisirs et activité professionnelle.
  
La mise en place d’une conciergerie d’entreprise peut être un levier intelligent et bienveillant de gestion des ressources humaines. Les prétextes à la mise en place d’une conciergerie peuvent être nombreux : agir dans le cadre de sa RSE, de sa politique de Développement Durable, d’un plan d’action égalités hommes / femmes, etc …
      
Les services se déclinent sous trois volets : 
  - perso : des services pour faciliter le quotidien de vos collaborateurs 
  - pro : des services pour votre structure : accueil, corbeilles de fruits, gestion des salles de réunion…
  - Des animations : organisation d’événements fédératifs, créateurs de lien, sensibilisation à l’économie sociale et solidaire.

Grâce à des prix avantageux les collaborateurs bénéficient ainsi de la relation de partenariat que la Conciergerie tisse avec ses prestataires.
Ces services sont actuellement déployés par STEP sur la Technopole Hélioparc, sur les sites EDF Pau et EDF Anglet ainsi qu’en prestations pour l’entreprise Teréga.`,
    },
  ];

}
