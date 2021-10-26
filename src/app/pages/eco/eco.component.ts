import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eco',
  templateUrl: './eco.component.html',
  styleUrls: ['./eco.component.css']
})
export class EcoComponent implements OnInit {

  
  @Input() title: string = ''
  @Input() titleBold: string = 'Une aventure, un état d’esprit !'
  @Input() text: string = 'Les questions sociétales, en termes de responsabilité sociale des entreprises (RSE) et environnementales sont intégrées dans chacune de nos activités. Ainsi nous œuvrons au maximum pour limiter les impacts des développements informatiques sur l’environnement en aidant nos clients à repenser leurs usages et à choisir la technologie la plus adaptée, en appliquant ces principes en interne et en misant sur l’éco conception.'
  constructor() { }

  ngOnInit(): void {
  }

}
