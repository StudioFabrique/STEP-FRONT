import { Component, OnInit } from '@angular/core';
import { ThumbscarouselService } from 'src/app/services/thumbscarousel.service';

@Component({
  selector: 'app-conciergerie',
  templateUrl: './conciergerie.component.html',
  styleUrls: ['./conciergerie.component.css']
})
export class ConciergerieComponent implements OnInit {

  constructor(public thumbsServ: ThumbscarouselService) { }

  ngOnInit(): void {
    this.thumbsServ.getImgThumbsConciergerie();
  }


  bgImg="assets/img/office.jpg"
  corner = "assets/corners/white_orange.png"
  title="Conciergerie d’entreprise ";
  accroche="Des collaborateurs heureux, ça n’a pas de prix, non ?";
  text="C’est une de nos dernières créations, un beau projet de services aux collaborateurs des organisations que nous accompagnons en collaboration avec la Conciergerie Solidaire de Bordeaux.";




  articles = [
    {
      icon: '/assets/svg/stack.svg',
      titre: "Des services pour améliorer le quotidien des salariés",
      accroche:'…et alléger la charge mentale',
      column: `Faciliter la vie, alléger cette fameuse charge mentale, pour être plus serein professionnellement, retrouver du temps pour soi, pour les autres. Mais aussi rendre plus fluide l'organisation de l'entreprise.
      Comment allier tout cela et plus encore ? … La conciergerie d’entreprise permet à vos salariés d’avoir accès sur leurs lieux de travail, à un large panel de services clés en main répondant à tous les besoins du quotidien, de la livraison de courses à la garde d’enfants en passant par le repassage à domicile, mais aussi de développer des services “pros” pour votre structure.  La conciergerie d’entreprise est un agrégateur de services et un facilitateur de liens.
     `,
      image: '/assets/metiers/flux-doc/flux_doc_6.jpg',
      
    },
  ];

}
