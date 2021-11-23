import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eco-page',
  templateUrl: './eco-page.component.html',
  styleUrls: ['./eco-page.component.css']
})
export class EcoPageComponent implements OnInit {

  constructor() { }


  @Input() title: string = ''
  @Input() titleBold: string = 'Une aventure, un état d’esprit!'
  @Input() text: string = 'Les questions sociétales, en termes de responsabilité sociale des entreprises (RSE) et environnementales sont intégrées dans chacune de nos activités. Ainsi nous œuvrons au maximum pour limiter les impacts des développements informatiques sur l’environnement en aidant nos clients à repenser leurs usages et à choisir la technologie la plus adaptée, en appliquant ces principes en interne et en misant sur l’éco conception.'


  header = {
"p":`Société de l’économie sociale et solidaire, nous portons également la Fabrique du Numérique Paloise (CFA, organisme de formation).

Notre vision de la formation, nous incite à chercher des solutions pour développer nos actions auprès de publics en difficulté, et au-delà à réduire notre empreinte carbone, lorsque nous produisons du code, réparons un ordinateur, proposons un service client. Ainsi, les développeurs que nous formons ont conscience que leur activité n’est pas neutre et savent en amortir les impacts.

Dans notre atelier, nos techniciens favorisent le reconditionnement et la durée de vie des matériels informatiques. Cette volonté, nous la portons dans chacune de nos démarches, en adaptant nos stratégies d’entreprise, que ce soit en matière d’énergie, de transports ou dans nos métiers. Notre site web éco-conçu en est également l’illustration.

Au-delà, nous offrons, dès que possible, des formations aux publics éloignés, du matériel, de l’assistance technique. Plus qu’une méthode, c’est une philosophie !
  `}


  ngOnInit(): void {
  }

}
