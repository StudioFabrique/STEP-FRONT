import { Component, OnInit, Input, HostListener } from '@angular/core';
import { PrestationsCarouselService } from 'src/app/services/prestations-carousel.service';



@Component({
  selector: 'app-prestations-carousel',
  templateUrl: './prestations-carousel.component.html',
  styleUrls: ['./prestations-carousel.component.css'],
})
export class PrestationsCarouselComponent implements OnInit {


  constructor(public prestationServ: PrestationsCarouselService) {}

  ngOnInit(): void {}

  // @Input() listTitle: string = "default"
  // @Input() img: string = "default"
  // @Input() title: string = "default"
  // @Input() text: string = "default"

  // slides= [
  //   {
  //     listTitle: "Numérisation",
  //     img: '../../../assets/solutions/formations.jpg',
  //     title: 'Numérisation',
  //     text: 'Numérisation hauts volumes, patrimoniale, microformes, hors format, grand format et traitement de données. Editique, impression déportée de courriers de gestion',
  //   },
  //   {
  //     listTitle: 'Traitement de données',
  //     img: '../../../assets/solutions/formations.jpg',
  //     title: 'Traitement de données',
  //     text: 'Numérisation hauts volumes, patrimoniale, microformes, hors format, grand format et traitement de données. Editique, impression déportée de courriers de gestion',
  //   },
  //   {
  //     listTitle: 'Editique',
  //     img: '../../../assets/solutions/formations.jpg',
  //     title: 'Editique',
  //     text: 'Numérisation hauts volumes, patrimoniale, microformes, hors format, grand format et traitement de données. Editique, impression déportée de courriers de gestion',
  //   },
  // ];





}
